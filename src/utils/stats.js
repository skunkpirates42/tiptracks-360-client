export const stats = { 
  testFunc: () => {
    console.log('hi');
  },
  daily: (tips) => { 
    // daily tips logic
  }
};



//  function genereteFormattedDate(date, format) {
//   return moment(date).format(format);
// }
/*
function calcTakeHomeTips (totalTips, tippedOut) {
  if (!Number.isNaN(totalTips)) {
    totalTips = Number(totalTips)
  }
  
  if (!Number.isNaN(tippedOut)) {
    tippedOut = Number(tippedOut)
  } 

  return totalTips - tippedOut;
}

function calcTotalPay(takeHomeTips, hours, baseWage) {
  takeHomeTips = Number(takeHomeTips);
  hours = Number(hours);
  baseWage = Number(baseWage);
  return (hours * baseWage) + takeHomeTips
}

function calcHourlyRate (takeHomeTips, hours, baseWage) {
  // Validate - we don't want to do  JS math with anything but numbers
  if (!Number.isNaN(hours)) {
    hours = Number(hours)
  }
  
  if (!Number.isNaN(takeHomeTips)) {
    takeHomeTips = Number(takeHomeTips)
  } 

  if (!Number.isNaN(baseWage)) {
    baseWage = Number(baseWage)
  }
  return (takeHomeTips / hours) + baseWage;
}

function calcAvgHourlyRate(hourlyRates) {
  const accumulatedHourlyRate = hourlyRates.reduce((acc, next) => acc += next);
  return accumulatedHourlyRate / hourlyRates.length;
}

render() {

  const weeklyTips = {};
  const monthlyTips = {};

  for (let tip of this.props.tips) {
    const firstDayOfWeek = moment(tip.date).weekday(0).format('MMMM Do YYYY')
    const weekOfYear = moment(tip.date).week();
    const year = moment(tip.date).year();
    const month = moment(tip.date).month();
    const monthAndYear = `${month} - ${year}`;
    const yearAndWeek = `${year}-${weekOfYear}`;
    const takeHomeTips = this.calcTakeHomeTips(tip.totalTips, tip.tippedOut);
    const hourlyRate = this.calcHourlyRate(takeHomeTips, tip.hours, tip.baseWage);
    const takeHomePay = this.calcTotalPay(takeHomeTips, tip.hours, tip.baseWage)
    const monthlyFormatted = `Month of ${this.genereteFormattedDate(tip.date, 'MMMM YYYY')}`;
    const weeklyFormatted = `Week of ${firstDayOfWeek}`;
    
    if (yearAndWeek in weeklyTips) {
      weeklyTips[yearAndWeek].totalTips += takeHomeTips;
      weeklyTips[yearAndWeek].wages.push(hourlyRate);
      weeklyTips[yearAndWeek].avgWage = this.calcAvgHourlyRate(weeklyTips[yearAndWeek].wages);
      weeklyTips[yearAndWeek].hours += Number(tip.hours)
      weeklyTips[yearAndWeek].takeHomePay += takeHomePay;

    } else {
      weeklyTips[yearAndWeek] = {
        formattedDate: weeklyFormatted,
        totalTips: takeHomeTips,
        wages: [hourlyRate],
        avgWage: hourlyRate,
        hours: Number(tip.hours),
        takeHomePay
      };
    }

    if (monthAndYear in monthlyTips) {
      monthlyTips[monthAndYear].totalTips += takeHomeTips;
      monthlyTips[monthAndYear].wages.push(hourlyRate);
      monthlyTips[monthAndYear].avgWage = this.calcAvgHourlyRate(monthlyTips[monthAndYear].wages);
      monthlyTips[monthAndYear].hours += Number(tip.hours);
      monthlyTips[monthAndYear].takeHomePay += takeHomePay;
    } else {
      monthlyTips[monthAndYear] = {
        formattedDate: monthlyFormatted,
        totalTips: takeHomeTips,
        wages: [hourlyRate],
        avgWage: hourlyRate,
        hours: Number(tip.hours),
        takeHomePay
      };
    } 
  }
  console.log(weeklyTips);
  

  const daily = this.props.tips.map((tip) => {
    const { totalTips, tippedOut, hours, notes, baseWage, date, id } = tip
    const formattedDate = this.genereteFormattedDate(date, 'dddd, MMMM Do YYYY');
    const takeHomeTips = this.calcTakeHomeTips(totalTips, tippedOut);
    const hourlyRate = this.calcHourlyRate(takeHomeTips, hours, baseWage);
    const takeHomePay = this.calcTotalPay(takeHomeTips, hours, baseWage);
    const stats = { formattedDate, hourlyRate, notes, hours, takeHomeTips, takeHomePay ,id };

    return (
      <Card
        key={id} hourlyType="Hourly Rate" {...stats}
      />
    )
  }); */