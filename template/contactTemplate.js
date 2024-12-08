// Email template for contact

const createContactEmailTemplate = (email, subject, fullName, message) => {
  return `
   <div style="font-family:monospace;">

<h2 style="background: linear-gradient(to right,orangered,orange ); color:white; text-align:center; font-size:24px; padding:5px;">
    Hello, Sprakle
</h2>

<div>

<p style="margin:5px 0px; font-size:12px;"># Recived from: ${email}
</p>


<div style="margin-bottom: 5px; width: 100%; background: linear-gradient(to right,orangered,orange); text-align:center; color:white;">
  <h3 style="padding:5px;">${subject}</h3>
</div>

<div style="border:2px dashed black; padding:5px; display: table; width: 100%; height: 100%;">
  <p style="padding:0px; margin:0px; font-size:14px;">${message}</p>
  <p style="display: table-footer-group; text-align: right; margin: 0; padding: 5px; font-size:14px;">By ${fullName}</p>
</div>



  <div>
  <p>This Message is sent from:</p>
  <a href="https://sparklenepal.com/">SPARKLE KIDS ACADEMY</a>
</div>
        <div style="text-align: center;">
  <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="sparkle logo" style="width:200px; height:200px;" />
</div>


  `;
};

module.exports = createContactEmailTemplate;