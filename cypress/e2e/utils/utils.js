import Common from "../common/Common";

export default class Utils {
  constructor() {
    this.common = new Common();
    this.lastNameArr = [
      "smith",
      "jones",
      "allen",
      "fellows",
      "freeman",
      "tavern",
      "pisoni",
      "corda",
      "brusa",
      "hammond",
      "perez",
      "bernard",
      "hall",
      "tank",
      "taglia",
      "jackson",
      "corda",
      "cabunga",
      "nunez",
      "hodge",
      "rianda",
      "frank",
      "morales",
    ];
    this.firstNameArr = [
      "chris",
      "davis",
      "john",
      "carolyn",
      "chris",
      "buddy",
      "karen",
      "erma",
      "marilyn",
      "nancy",
      "randy",
      "bruce",
      "joe",
      "wade",
      "peggy",
      "lisa",
      "honey",
      "lynn",
      "bud",
      "jean",
      "mary",
      "scott",
      "mark",
      "tommy",
      "tony",
      "bruce",
      "maryluz",
    ];
    this.middleNameArr = [
      "louise",
      "rose",
      "grace",
      "jane",
      "elizabeth",
      "marie",
      "liam",
      "noah",
      "oliver",
      "elijah",
      "benjamin",
    ];
    this.OSCAHolidays = {
      veterans: {
        year: 2022,
        month: 11,
        day: 11,
      },
      thanksgiving: {
        year: 2022,
        month: 11,
        day: 24,
      },
      christmas: {
        year: 2022,
        month: 12,
        day: 26,
      },
      newyearsday: {
        year: 2023,
        month: 1,
        day: 2,
      },
      mlk: {
        year: 2023,
        month: 1,
        day: 16,
      },
      lincoln: {
        year: 2023,
        month: 2,
        day: 13,
      },
      washington: {
        year: 2023,
        month: 2,
        day: 20,
      },
      truman: {
        year: 2023,
        month: 5,
        day: 8,
      },
      memorial: {
        year: 2023,
        month: 5,
        day: 29,
      },
      juneteenth: {
        year: 2023,
        month: 6,
        day: 19,
      },
      independence: {
        year: 2023,
        month: 7,
        day: 4,
      },
      labor: {
        year: 2023,
        month: 9,
        day: 4,
      },
      columbus: {
        year: 2023,
        month: 10,
        day: 9,
      },
      veterans23: {
        year: 2023,
        month: 11,
        day: 10,
      },
      thanksgiving23: {
        year: 2023,
        month: 11,
        day: 23,
      },
      christmas23: {
        year: 2023,
        month: 12,
        day: 25,
      },
    };
  }

  getRandomDate(startDate, endDate) {
    const minValue = startDate.getTime();
    const maxValue = endDate.getTime();
    const timestamp = Math.floor(
      Math.random() * (maxValue - minValue + 1) + minValue
    );
    return new Date(timestamp);
  }
  /**
   * attempt to have random names
   * @returns object
   *   with birthDay between 25 - 45 years old
   */
  getRandomOfficerData() {
    let ts = Date.now();

    let lastName = (
      this.lastNameArr[Math.floor(Math.random() * this.lastNameArr.length)] +
      "_" +
      ts
    ).toUpperCase();
    let firstName =
      this.firstNameArr[
        Math.floor(Math.random() * this.firstNameArr.length)
      ].toUpperCase();

    let badge = this.randomAlphaNumeric(10).toUpperCase();

    let group = this.randomNumeric(3);

    let today = new Date();

    let endDate = this.getRandomDate(
      new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()),
      new Date(today.getFullYear() + 2, today.getMonth(), today.getDate())
    );

    return {
      lastName: lastName,
      firstName: firstName,
      badgeNum: badge,
      groupNum: group,
      endDate: this.formatDate(endDate),
    };
  }

  getRandomDefendantData() {
    let ts = Date.now();

    let lastName =
      this.lastNameArr[Math.floor(Math.random() * this.lastNameArr.length)] +
      "_" +
      ts;
    let firstName =
      this.firstNameArr[Math.floor(Math.random() * this.firstNameArr.length)];

    let middleName =
      this.middleNameArr[Math.floor(Math.random() * this.middleNameArr.length)];

    let today = new Date();

    let birthDate = this.getRandomDate(
      new Date(today.getFullYear() - 25, today.getMonth(), today.getDate()),
      new Date(today.getFullYear() - 45, today.getMonth(), today.getDate())
    );

    let sex = [
      "karen",
      "erma",
      "peggy",
      "honey",
      "jean",
      "lynn",
      "marilyn",
      "lisa",
      "mary",
      "maryluz",
      "carolyn",
    ].includes(firstName)
      ? "Female"
      : "Male";
    return {
      lastName: lastName,
      firstName: firstName,
      middleName: middleName,
      sex: sex,
      birthDate: this.formatDate(birthDate),
      street: "100 Main St",
      city: "Jefferson City",
      state: "Missouri",
      stateCode: "US-MO",
      zip: "65101",
      country: "US",
    };
  }

  generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  generateRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  generateRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  /**
   * return true if weekend
   * @param {} date
   * @returns
   */
  isWeekEnd(date) {
    return date.getDay() == 0 || date.getDay() == 6;
  }
  /**
   * return true/false if date is holiday
   * @param {*} date
   * @returns
   */
  isHoliday(date) {
    let keys = Object.keys(this.OSCAHolidays);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let found = false;
    keys.forEach((key) => {
      let obj = this.OSCAHolidays[key];
      if (obj["year"] == year && obj["month"] == month && obj["day"] == day) {
        found = true;
      }
    });
    return found;
  }
  /**
   * returns formatted date which is neither
   * a weekend nor a holiday
   * @param {} numberOfDaysFromNow
   */
  getValidDateForSchedulingStartingFromNow(numberOfDaysFromNow) {
    for (
      var _daysFromNow = numberOfDaysFromNow;
      _daysFromNow < numberOfDaysFromNow + 10;
      _daysFromNow++
    ) {
      let date = this.addDaysToDate(_daysFromNow);

      if (!this.isWeekEnd(date) && !this.isHoliday(date)) {
        return this.formatDate(date);
      }
    }
    throw new Error("no valid day found");
  }
  /**
   * returns date
   */
  addDaysToDate(numberOfDays) {
    var date = new Date();
    date.setDate(date.getDate() + numberOfDays);
    return date;
  }
  /**
   * future date
   * @param {*} numberOfDaysFromNow
   * @returns formatted date in future
   */
  daysFromNow(numberOfDaysFromNow) {
    let date = this.addDaysToDate(numberOfDaysFromNow);
    return this.formatDate(date);
  }
  /**
   *
   * @returns date 1 month from now
   */
  oneMonthAgo() {
    let d = new Date();
    d.setMonth(d.getMonth() - 1);
    return this.formatDate(d);
  }
  /**
   * Return formatted date
   * @param {*} aDate - a Date() instance
   * @returns MM/DD/YYYY
   */
  formatDate(aDate) {
    return aDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  /**
   * Return formatted time
   * @param {*} aDate - a Date() instance
   * @returns hh:mm:ss
   */
  formatTime(aDate) {
    return aDate.toLocaleTimeString("it-IT");
  }
  /**
   *
   * @returns  2 random letters followed by 7 digits
   */
  caseTicketNumber(nonConservationTicket) {
    if (nonConservationTicket) {
      return `${Date.now().toString().slice(-9)}`;
    }
    return `${this.generateRandomLetter()}${this.generateRandomLetter()}${Date.now()
      .toString()
      .slice(-7)}`;
  }
  /**
   *  Return mixture  numbers for the length
   */
  randomNumeric(length) {
    let rtn = "";
    for (let i = 0; i < length; i++) {
      rtn += this.generateRandomNumber();
    }
    return rtn;
  }
  /**
   *  Return mixture of letters and numbers for the length
   */
  randomAlphaNumeric(length) {
    let rtn = "";
    for (let i = 0; i < length; i++) {
      switch (i % 2) {
        case 0:
          rtn += this.generateRandomLetter();
          break;
        default:
          rtn += this.generateRandomNumber();
          break;
      }
    }
    return rtn;
  }
  /**
   * Validates that all the messages have
   * been displayed
   * Sometimes the script is so fast the
   * noty messages don't disappear quick enough
   * so ignore the messages from previous
   * and just confirm that the messager we're
   * looking for does exist
   *
   * @param {*} messageArr
   * @param {*} debug - if you want to debug
   */
  validateNotyMessages(messageArr, debug) {
    this.clearNotyMessages();
    /*
    /*
    Commented out 8/22/2022 because of too many race conditions.
    When there are large number of requests, the notyMessage request
    is also there.  All the requests have to finish before we can
    interact w/ the noty message and sometimes it has already disappeared
    and is no longer available in the DOM.
   
    let countFound = 0;

    cy.get(".noty_message")
      .should("have.length.least", messageArr.length)
      .each(($ele) => {
        if (debug) {
          debugger;
        }
        for (var i = 0; i < messageArr.length; i++) {
          if ($ele.text().includes(messageArr[i].trim())) {
            
            //seems that sometimes the noty messages don't receive the click
            if (debug) {
              debugger;
            }
            cy.wrap($ele).click();

            countFound++;
            break;
          } 
        }
      })
      .then(() => {
        expect(countFound == messageArr.length).to.be.true;
      });
      */
  }
  /**
   * Sometimes a noty message will appear only on the first
   * use of a function, for example when createing a case,
   * the case is locked on first use.  But subsequent
   * usage will not show that message.  This is a way to clear
   * them out
   * @param {} debug
   */
  clearNotyMessages() {
    const $els = Cypress.$(".noty_message");
    $els.each(function () {
      Cypress.$(this).trigger("click");
    });
  }
  /**
   * Read the run time file
   */
  readRunTimeFile(tempFileName, callback) {
    this.common.readRunTimeFile(tempFileName, ($json) => {
      callback($json);
    });
  }

  getTimeFormatted(date) {
    return date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .slice(0, 5);
  }
}
