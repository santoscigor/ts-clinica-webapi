import fs from "fs";
import { promisify, isArray } from "util";
import { Shift, ShiftArgs } from "../models/shift";
import { Range, getDates } from "../utils/getRange";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const checkDb = async () => {
  try {
    const jsonData = await readFileAsync("data.json");
    const data = JSON.parse(jsonData.toString());
    if (!Array.isArray(data)) throw new Error("Data is not an array");
  } catch {
    writeFileAsync("data.json", JSON.stringify([]));
  }
};

const getAllShifts = async () => {
  const jsonData = await readFileAsync("data.json");
  const shifts = JSON.parse(jsonData.toString());

  return shifts;
};

const insertShift = async (shift: Shift) => {
  const allShifts = await getAllShifts();
  allShifts.push(shift);
  writeFileAsync("data.json", JSON.stringify(allShifts));
};

const deleteShift = async (id: string) => {
  const allShifts = await getAllShifts();
  let deletedShift;
  const newShifts = allShifts.filter((shift: any) => {
    if (shift?.id === id) {
      deletedShift = shift;
      return false;
    } else {
      return true;
    }
  });
  writeFileAsync("data.json", JSON.stringify(newShifts));
  return deletedShift;
};

const getShiftsInRange = async (args: Range) => {
  const allShifts: ShiftArgs[] = await getAllShifts();
  const shifts = allShifts.map(shift => new Shift(shift));
  const availableShifts = [];

  Shift.validateRange(args);
  const dates = getDates(args);
  for (const date of dates) {
    for (const shift of shifts) {
      const responseData = shift.getResponseDataIfInDate(date);
      if (responseData) {
        availableShifts.push(responseData);
      }
    }
  }

  return availableShifts;
};

export const db = {
  checkDb,
  getAllShifts,
  insertShift,
  deleteShift,
  getShiftsInRange
};
