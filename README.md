# Blair Hack Club v2 Site

## Environment variables
- NEXT_PUBLIC_AIRTABLE_BASE_ID
- NEXT_PUBLIC_AIRTABLE_API_KEY

## Airtable integration
This site integrates with an Airtable base to read data. The base should have the following tables with the following fields:
- `Scraps` table
  - `Scrap ID`: Autonumber
  - `Created time`: Created time
  - `Discord Message ID`: Single line text
  - `Discord Thread ID`: Single line text
  - `Description`: Long text
  - `Attachments`: Attachment
  - `Tags`: Multiple select (not implemented yet)
  - `Mentions`: Link to Users, Allow linking to multiple records (not implemented yet)
  - `User`: Link to Users
  - `User Record ID`: Lookup, User, Record ID
  - `Username (from User)`: Lookup, User, Username
  - `Avatar (from User)`: Lookup, User, Avatar
- `Users` table
  - `Username`: Single line text
  - `Record ID`: Formula, `RECORD_ID()` (optional)
  - `Discord UID`: Single line text
  - `Avatar`: Attachment,
  - `GitHub User`: Single line text
  - `Website`: Single line text
  - `Scraps`: Link to Scraps, Allow linking to multiple records
  - `Mentions`: Link to scraps, Allow linking to multiple records (not implemented yet)

Read more about Airtable's API: https://airtable.com/api
