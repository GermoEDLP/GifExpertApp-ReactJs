import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifList } from "../../components/GifList";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifList />", () => {
  const categoria = "One punch";

  test("debe mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifList categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imágenes", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifList categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("#loadingText").exists()).toBe(false);
    expect(wrapper.find("GifListItem").length).toBe(gifs.length);
  });
});
