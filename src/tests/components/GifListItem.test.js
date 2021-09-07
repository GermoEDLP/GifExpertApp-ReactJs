import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
//importar GifListItem
import GifListItem from "../../components/GifListItem";

describe("Pruebas en <GifListItem />", () => {
  var wrapper;
  const title = "Titulo de prueba";
  const url = "https://localhost/gif.gif";

    wrapper = shallow(<GifListItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el titulo correctamente", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de mostrar la imagen correctamente", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
  });

  test("el div contenedor debe tener la clase animate__bounceInUp", ()=>{
    const div = wrapper.find("div");
    expect(div.hasClass("animate__bounceInUp")).toBe(true);
  })
});
