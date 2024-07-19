
import moment from 'moment'

/* moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    // past: '%s ago',
    s: 'a few seconds ago',
    ss: '%d seconds ago',
    m: 'a minute ago',
    mm: '%d minutes ago',
    h: 'an hour ago',
    hh: '%d hours ago',
    d: 'a day ago',
    dd: '%d days ago',
    w: 'a week ago',
    ww: '%d weeks ago',
    M: 'a month ago',
    MM: '%d months ago',
    y: 'a year ago',
    yy: '%d years ago'
  }
}) */

const getFormat = format => {
  if (format === 'DATE-TIME') {
    return 'D MMM YYYY hh:mm A'
  }

  return 'D MMM YYYY'
}
const format = (date, format = 'DEFAULT') => moment(date).format(getFormat(format))

const formatTs = (date, format = 'DEFAULT') => moment(date, 'x').format(getFormat(format))

const formatFull = (date, format = 'DATE-TIME') => moment(date, 'x').format(getFormat(format))

const ago = (date) => moment(date, 'x').fromNow()

export default {
  ago,
  format,
  formatTs,
  formatFull
}
