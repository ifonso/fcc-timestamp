interface ResponseTimes {
  unix: number;
  utc: string;
}

interface ResponseFail {
  error: string;
}

function getTimesResponse(time: string): ResponseTimes | ResponseFail {
  // utc Date RegEx (yyyy-mm-dd)
  if (/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(time)) {
    let date = new Date(time)

    return {
      unix: date.getTime(),
      utc: date.toUTCString()
    }
  }

  // unix time check
  if (!isNaN(Number(time))) {
    let date = new Date(Number(time));

    return {
      unix: Number(time),
      utc: date.toUTCString()
    }
  }

  return {
    error: "Invalid Date"
  }
}

function getCurrentTimeResponse(): ResponseTimes {
  let date = new Date();

  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  }

}


export default {
  getTimesResponse,
  getCurrentTimeResponse
};