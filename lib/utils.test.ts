import { test, expect, it } from "bun:test";
import { welcomeMessage } from "./utils";

test("utils", () => {
  it("should return a welcome message", () => {
    expect(welcomeMessage("John")).toBe("Hello John, Welcome to PBandJ!");
  });
});
