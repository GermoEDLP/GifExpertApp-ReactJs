import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import AddCategory from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const handleAdd = jest.fn();
  let wrapper = shallow(<AddCategory handleAdd={handleAdd} />);
  
  beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory handleAdd={handleAdd} />);
  })

  test("debe cargar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("la caja de texto debe contener lo que se pasa por input", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No se debe llamar la función de agregar si el input esta vacio", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(handleAdd).not.toHaveBeenCalled();
  });

  test('debe llamar al handleAdd y limpiar la caja de texto', () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(input.prop("value")).toBe("");

    expect(handleAdd).toHaveBeenCalled();

    //que sea llamado con algun String
    expect(handleAdd).toHaveBeenCalledWith(expect.any(String));
  })
  
});
