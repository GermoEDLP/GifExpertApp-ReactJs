import { getGifs } from "../../helpers/GetGifs";

describe("Pruebas con GetGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });
  test("Debe de traer 0 elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
