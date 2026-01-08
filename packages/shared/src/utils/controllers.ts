import type { RequestHandler } from "express";

export const homeController: RequestHandler = (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to the Home Page!" });
};
