import { Router } from "express";

import { db } from "../services/db";
import { Shift } from "../models/shift";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const shifts = await db.getAllShifts();
    res.status(200).send(shifts);
  } catch (e) {
    res.status(400).send({
      message: e.message
    });
  }
});

router.get("/search", async (req, res) => {
  try {
    const {start, end} = req.query;
    const shifts = await db.getShiftsInRange({start, end});
    res.status(200).send(shifts);
  } catch (e) {
    res.status(400).send({
      message: e.message
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { dateInfo, intervals, type } = req.body;
    const shift = new Shift({ dateInfo, intervals, type });
    await db.insertShift(shift);
    res.status(200).send(JSON.stringify(shift));
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: e.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedShift = await db.deleteShift(id);
    res.status(200).send(JSON.stringify(deletedShift));
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

export default router;
