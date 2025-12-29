# Waitlist Email Storage & Access

## Where Emails Are Stored

Emails from the waitlist form are stored in a JSON file:
- **Location**: `data/waitlist.json`
- **Format**: JSON array with email entries

## How to Access Waitlist Emails

### Option 1: View via API (Recommended)

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Access the API endpoint**:
   - Open: `http://localhost:3000/api/waitlist`
   - This will return all registered emails in JSON format

3. **View in browser or use curl**:
   ```bash
   curl http://localhost:3000/api/waitlist
   ```

### Option 2: View JSON File Directly

1. **Navigate to the data folder**:
   ```bash
   cd data
   cat waitlist.json
   ```

2. **Or open in your code editor**:
   - File: `data/waitlist.json`

### Option 3: Create an Admin Page (Optional)

You can create an admin page to view emails. Create `app/admin/page.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => {
        setEmails(data.entries || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Waitlist Entries</h1>
      <p className="mb-4">Total: {emails.length}</p>
      <div className="space-y-2">
        {emails.map((entry: any) => (
          <div key={entry.id} className="p-2 border rounded">
            <p>{entry.email}</p>
            <p className="text-sm text-gray-500">
              {new Date(entry.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Data Structure

Each entry in `waitlist.json` looks like:
```json
{
  "email": "user@example.com",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "id": "1705315800000-abc123xyz"
}
```

## Export to CSV

To export emails to CSV, you can use this script:

```javascript
// scripts/export-csv.js
const fs = require('fs');
const waitlist = JSON.parse(fs.readFileSync('data/waitlist.json', 'utf-8'));

let csv = 'Email,Date,ID\n';
waitlist.forEach(entry => {
  csv += `${entry.email},${entry.timestamp},${entry.id}\n`;
});

fs.writeFileSync('waitlist-export.csv', csv);
console.log('Exported to waitlist-export.csv');
```

## Production Options

For production, consider:

1. **Database Integration**:
   - PostgreSQL, MySQL, or MongoDB
   - Update `app/api/waitlist/route.ts` to use database

2. **Third-party Services**:
   - **Tally.so**: Form builder with built-in storage
   - **Google Sheets**: Via Google Sheets API
   - **Airtable**: Database with API
   - **SendGrid/Mailchimp**: Email marketing platforms

3. **Add Authentication**:
   - Uncomment the auth check in `GET` method
   - Set `ADMIN_TOKEN` in `.env.local`
   - Access: `curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3000/api/waitlist`

## Security Note

⚠️ **Important**: The GET endpoint is currently open. For production:
- Add authentication (see above)
- Or restrict access to admin routes
- Consider rate limiting

