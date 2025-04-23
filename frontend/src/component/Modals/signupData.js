export const getFormObj = (formdata, handleChange) => ({
    firstname: { label: 'First Name', value: formdata.firstname, md: 6, type: 'text', onChange: handleChange },
    lastname: { label: 'Last Name', value: formdata.lastname, md: 6, type: 'text', onChange: handleChange },
    middlename: { label: 'Middle Name', value: formdata.middlename, md: 12, type: 'text', onChange: handleChange },
    email: { label: 'Email', value: formdata.email, md: 12, type: 'email', onChange: handleChange },
    password: { label: 'Password', value: formdata.password, md: 12, type: 'password', onChange: handleChange },
    phonenumber: { label: 'Phone Number', value: formdata.phonenumber, md: 6, type: 'tel', onChange: handleChange },
    //Date Fields
    eventdate: { label: 'Event Date', value: formdata.eventdate, md: 6, type: 'date', onChange: handleChange },
    //select
    contry: { label: 'Contry', value: formdata.contry, md: 6, type: 'select', options: ['India', 'Japan', 'US', 'UAE', 'Canada', 'Jammu'], onChange: handleChange },
    eventlocation: { label: 'Event Location', value: formdata.eventlocation, md: 6, type: 'select', options: ['Select location', 'Surat', 'Mumbai', 'Thane', 'Gugram', 'Jaipur', 'Lonavala'], onChange: handleChange },
})