import moment from "moment";
import "moment/locale/pt-br";
import { v4 as uuid } from "uuid";

import { Range } from "../utils/getRange";
import { Interval, IntervalArgs } from "./interval";

moment.locale("pt-BR");

// weekdays format => Dom,Seg,Ter,Qua,Qui,Sex,Sáb
const momentWeekdays = moment.weekdaysShort();

enum ShiftType {
  Day = "day",
  Weekly = "weekly",
  Everyday = "everyday"
}

export interface ShiftArgs {
  type: ShiftType;
  dateInfo?: string;
  intervals: IntervalArgs[];
}

export class Shift {
  private _id: string;

  private _type: ShiftType;

  private _dateInfo: string;

  private _intervals: Interval[];

  public get id(): string {
    return this._id;
  }

  public get type(): ShiftType {
    return this._type;
  }

  public get dateInfo(): string {
    return this._dateInfo;
  }

  public get intervals(): Interval[] {
    return this._intervals;
  }

  public get weekdays(): string[] {
    if (this._type !== ShiftType.Weekly) return null;

    return this.dateInfo.split(",");
  }

  static validateDay = (day: string) => {
    if (!moment(day, "DD-MM-YYYY").isValid()) throw new Error("Invalid day");
  };

  static validateRange = (args: Range) => {
    Shift.validateDay(args.start);
    Shift.validateDay(args.end);
    if (
      moment(args.end, "DD-MM-YYYY").isBefore(moment(args.start, "DD-MM-YYYY"))
    ) {
      throw new Error("End must not be before start.");
    }
  };

  static validateWeekly = (weekdays: string) => {
    if (!weekdays) {
      throw new Error("Weekly shifts need to have at least one weekday.");
    }
    const days: string[] = weekdays.split(",");
    for (const day of days) {
      if (!momentWeekdays.includes(day)) throw new Error("Invalid weekday.");
    }
  };

  public getResponseData(date: string): any {
    return {
      day: date,
      intervals: this.intervals
    };
  }

  public getResponseDataIfInDate(date: string) {
    switch (this._type) {
      case ShiftType.Day:
        return date === this._dateInfo ? this.getResponseData(date) : null;
      case ShiftType.Weekly:
        const weekday = moment(date, "DD-MM-YYYY").format("ddd");
        if (this.weekdays.includes(weekday)) {
          return this.getResponseData(date);
        }
        return null;
      case ShiftType.Everyday:
        return this.getResponseData(date);
      default:
        return null;
    }
  }

  toJSON() {
    return {
      dateInfo: this._dateInfo,
      id: this._id,
      intervals: this._intervals,
      type: this._type.toString()
    };
  }

  constructor(args: ShiftArgs) {
    switch (args.type) {
      case ShiftType.Day:
        Shift.validateDay(args.dateInfo);
        this._dateInfo = args.dateInfo;
        break;
      case ShiftType.Weekly:
        Shift.validateWeekly(args.dateInfo);
        this._dateInfo = args.dateInfo;
        break;
      case ShiftType.Everyday:
        break;
      default:
        throw new Error("A shift needs to have a type.");
    }

    if (args.intervals.length < 1) {
      throw new Error("Shifts need to have at least one interval.");
    } else {
      this._intervals = args.intervals.map(interval => new Interval(interval));
    }

    this._type = args.type;
    this._id = uuid();
  }
}
