import moment from "moment";

export interface IntervalArgs {
  start: string;
  end: string;
}

export class Interval {
  private _start: string;

  private _end: string;

  public get start(): string {
    return this._start;
  }

  public get end(): string {
    return this._end;
  }

  toJSON() {
    return {
      start: this._start,
      end: this._end
    };
  }

  static isIntervalValid({ start, end }: any) {
    const startMoment = moment(start, "HH:mm");
    const endMoment = moment(end, "HH:mm");
    if (
      !startMoment.isValid() ||
      !endMoment.isValid() ||
      endMoment.isBefore(startMoment)
    ) {
      return false;
    }
    return true;
  }

  constructor(args: IntervalArgs) {
    if (Interval.isIntervalValid(args)) {
      this._start = args.start;
      this._end = args.end;
    } else {
      throw new Error("Invalid interval value.");
    }
  }
}
