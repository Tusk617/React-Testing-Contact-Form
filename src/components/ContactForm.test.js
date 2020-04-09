import React from "react";
import {render, fireEvent, waitForElement} from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act, waitFor } from "react-dom/test-utils";

test('first name input will be a reasonable length', async() => {
    //arrange
    const { getByPlaceholderText, getByTestId, queryByTestId } = render(<ContactForm/>)

    const firstNameInput = getByPlaceholderText("First name");
    const submitButtonInput = getByTestId("submitButton");
    
    //act
    act(() => {
        fireEvent.change(firstNameInput, { target: {value: "123456789"}});
    })
    console.log(firstNameInput.value);

    act(() => {
        fireEvent.click(submitButtonInput);
    })
    
    // const firstNameError =  getByTestId("firstNameError");
    const firstNameError = await waitForElement(() => getByTestId("firstNameError"));
    expect(firstNameError).toBeInTheDocument()
}) 

    
    //assert
//    await waitFor(() => {
       
    
// })