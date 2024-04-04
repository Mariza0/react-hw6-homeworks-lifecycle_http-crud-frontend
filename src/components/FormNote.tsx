import { FormEvent, useState } from "react";

type Item = {
    url: string;
  }

export const FormNote: React.FC<Item> = ({url}) => {
    
    const [ ,setError] = useState<string | null>(null);
    const [form, setForm] = useState({ newNote: "" });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        console.log('form data: ', form);

        
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {text: form.newNote} ),
          })
          .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
          })
          
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            setError(error);
        });

        setForm({
          newNote: ''
        });
      }
 
    return (
    <>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="card">
        <label htmlFor="new-note">New Note</label>
        <textarea id="new-note" name="newNote" className="input-class"  
        maxLength={180} 
        value={form.newNote}
        onChange={(e) => setForm({ ...form, newNote: e.target.value })}></textarea>
        <div className="new-note_wrap">
            <button type="submit" className="note-send-button"></button>
        </div>
        </div>
      </form>

    </>
    );
  };
  