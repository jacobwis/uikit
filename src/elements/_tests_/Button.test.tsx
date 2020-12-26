import * as React from "react";
import { screen, render } from "@testing-library/react";

describe('<Button />', () => {
  it('should run test', () => {
    render(<div>Hello World</div>)
    
    expect(screen.getByText("Hello World")).toEqual(false)
  })
})