import React, {useState} from "react";

export const Contact = () => {
        const [fullname, setFullname] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
    return <>
     <section id="contact">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>Contacts</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" id="name" aria-describedby="name" value={fullname} onChange={(event) => {
                    setFullname(event.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email"value={email} onChange={(event) => {
                    setEmail(event.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <label for="pesan" className="form-label">Pesan</label>
                  <textarea className="form-control" id="pesan" rows="3" value={message} onChange={(event) => {
                    setMessage(event.target.value)
                  }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={(event) => {
                    event.preventDefault()
                    console.log('test')
                    alert(`Nama : ${fullname} \nEmail : ${email}\nMessage : ${message}`)
                }}>Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
}