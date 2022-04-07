export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/Characters`
// export const storeURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/store`
export const config = {
  headers: {
    Authorization: `Bearer ${ process.env.REACT_APP_AIRTABLE_KEY }`
  }
}