// Email template for admission form
const createAdmissionEmailTemplate = (
  studentName,
  studentAge,
  studentDob,
  studentGender,
  studentAddress,
  guardianName,
  guardianAge,
  guardianDob,
  guardianGender,
  guardianAddress,
  number,
  emergencyNumber,
  nationality,
  maritalStatus,
  course,
  enrollmentDate,
  startingDate,
  reference,
  email
) => {
  return `
      <div style="font-family:monospace;">
      
<div style="background-color:white; padding:5px 0px;">
<h2 style="background: linear-gradient(to right,orangered,orange); color:white; text-align:center; font-size:24px; padding:5px;">
Hello, Sprakle
</h2>
</div>


<div>

<span style="border-bottom:1px solid black;"># Recived from: ${email}
</span>

<div style="margin-bottom: 5px; width: 100%; background: linear-gradient(to right,orangered,orange); color:white; padding:5px;">


    <h3 style="margin-top:30px; color:inherit;">Student Details:</h3>

    <div style="border: 2px solid transparent; border-image: linear-gradient(to right, yellow, orangered) 1; border-radius:10px; padding:5px; color:inherit;">
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; font-size:12px; color:inherit;">
        <tr>
          <td style="padding: 4px;">Name</td>
          <td style="padding: 4px;">${studentName}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">DOB</td>
          <td style="padding: 4px;">${studentDob}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Age</td>
          <td style="padding: 4px;">${studentAge}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Gender</td>
          <td style="padding: 4px;">${studentGender}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Address</td>
          <td style="padding: 4px;">${studentAddress}</td>
        </tr>
      </table>
    </div>

    <h3 style="margin-top:30px; color:inherit;">Guardian Details:</h3>

    <div style="border: 2px solid transparent; border-image: linear-gradient(to right, yellow, orangered) 1; border-radius:10px; padding:5px; color:inherit;">
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; font-size:12px; color:inherit;">
        <tr>
          <td style="padding: 4px;">Name</td>
          <td style="padding: 4px;">${guardianName}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">DOB</td>
          <td style="padding: 4px;">${guardianDob}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Age</td>
          <td style="padding: 4px;">${guardianAge}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Gender</td>
          <td style="padding: 4px;">${guardianGender}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Number</td>
          <td style="padding: 4px;">${number}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Em-Number</td>
          <td style="padding: 4px;">${emergencyNumber}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Marital Status</td>
          <td style="padding: 4px;">${maritalStatus}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Address</td>
          <td style="padding: 4px;">${guardianAddress}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Nationality</td>
          <td style="padding: 4px;">${nationality}</td>
        </tr>
      </table>
    </div>

    <h3 style="margin-top:30px; color:inherit;">Membership Details:</h3>

    <div style="border: 2px solid transparent; border-image: linear-gradient(to right, yellow, orangered) 1; border-radius:10px; padding:5px; color:inherit;">
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; font-size:12px; color:inherit;">
        <tr>
          <td style="padding: 4px;">Course Enrollment</td>
          <td style="padding: 4px;">${course}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Enrollment Date</td>
          <td style="padding: 4px;">${enrollmentDate}</td>
        </tr>
        <tr>
          <td style="padding: 4px;">Starting Date</td>
          <td style="padding: 4px;">${startingDate}</td>
        </tr>
      </table>
    </div>

    <div style="font-size:12px; color:inherit;">
      <p>Reference: ${reference}</p>
    </div>
</div>
<div>
<div style="margin-top: 50px; border-top: 4px solid transparent; border-image: linear-gradient(to right,orangered, yellow) 1;">
  <p>This Message is sent from:</p>
  <a href="https://sparklenepal.com/">SPARKLE KIDS ACADEMY</a>

  <div style="text-align: center;">
  <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="sparkle logo" style="width:200px; height:200px;" />
</div>
</div>


</div>
`;
};

module.exports = createAdmissionEmailTemplate;



