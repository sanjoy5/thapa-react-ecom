import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14576.640708240924!2d90.31201592850792!3d24.025416100048556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ddc086f1d281%3A0xc24955973cd97afa!2sAmbag!5e0!3m2!1sen!2sbd!4v1675688489313!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" action="https://formspree.io/f/mrgvpblb" method="POST">
            <input type="text" placeholder="Name" name="username" required autoComplete="off" />

            <input type="email" name="email" placeholder="email" autoComplete="off" required />

            <textarea name="message" placeholder="Enter your message" cols="30" rows="10" required autoComplete="off"></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
};

export default Contact;
