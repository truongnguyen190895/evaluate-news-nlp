import { handleSubmit } from "../client/js/formHandler";

describe("handleSubmit", () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <form id="urlForm">
        <input type="text" id="name" value="https://example.com" />
        <button type="submit">Submit</button>
      </form>
      <div id="subjectivity"></div>
      <div id="text"></div>
    `;

    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            subjectivity: "subjective",
            sentence_list: [
              { segment_list: [{ text: "This is a test sentence." }] },
            ],
          }),
      })
    );
  });
  test("should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
