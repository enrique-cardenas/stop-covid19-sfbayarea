import dayjs from 'dayjs'

export const convertDatetimeToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DDTHH:mm:ss')
}

export const convertDateToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DD')
}

export const convertISO8601ToHumanDateFormat = (dateString: string): string => {
  return dayjs(dateString).format('MM/DD/YYYY')
}
