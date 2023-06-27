export default class Common {
  constructor() {}

  /**
   * Run task to read file and pass to Callback function
   * @param {*} tempFileName
   * @param {*} callBackFunction
   */

  readRunTimeFile(tempFileName, callBackFunction) {
    cy.task("readFileMayBe", tempFileName).then(($json) => {
      callbackFunction($json);
    });
  }
}
