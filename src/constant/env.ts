export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_LOCAL = process.env.NODE_ENV === 'development'

export const showLogger = IS_LOCAL
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false
