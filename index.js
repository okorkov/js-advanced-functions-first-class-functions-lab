// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers) {return [arrayOfDrivers[0], arrayOfDrivers[1]]}

const returnLastTwoDrivers = function(arrayOfDrivers) {return [arrayOfDrivers[arrayOfDrivers.length - 2], arrayOfDrivers[arrayOfDrivers.length -1]]}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {return function(multiplier=fare) {return fare * multiplier}}

const fareDoubler = function(fare) {return createFareMultiplier(fare)(2)}

const fareTripler = function(fare) {return createFareMultiplier(fare)(3)}

function selectDifferentDrivers(arrayOfDrivers, callBack) {
  return callBack(arrayOfDrivers)
}