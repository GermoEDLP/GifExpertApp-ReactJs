import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../../components/GifExpertApp";

describe("Pruebas con <GifExpertApp />", () => {
  const wrapper = shallow(<GifExpertApp />);

  test("el compoenente debe crearse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Samurai X", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategorias={categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifList").length).toBe(categories.length);
  })
});
