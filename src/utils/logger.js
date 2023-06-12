const { createLogger, format, transports } = require('winston');

const { colorize, timestamp, printf, splat } = format;

const customFormat = format.combine(
  splat(),
  timestamp(),
  colorize(),
  printf(
    (info) => `${info.timestamp} [${info.level.padEnd(7)}]: ${info.message}`
  )
);

const logger = createLogger({
  format: customFormat,
  transports: [new transports.Console()],
});

module.exports = { logger };
