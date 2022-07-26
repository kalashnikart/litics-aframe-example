import { useState } from 'react';

export const SetupForm = ({ submit }: any): JSX.Element => {
  const [data, setData] = useState('');

  const handle = (e: any) => {
    e.preventDefault();
    if (!data) return;
    submit(data);
  }

  return (
    <div>
      <form onSubmit={handle}>
        <div>
          <label htmlFor="data">
            <h2>AFrame Component Code Snippet:</h2>
            <textarea
              placeholder='<a-camera metalitix-logger="appkey: f4600789-38e7-4d16-a7c4-26a47fc7de7a"></a-camera>'
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div>
          <input type="submit" value="run demo" />
        </div>
      </form>
    </div>
  )
}