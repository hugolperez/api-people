const peopleMock = [
  {
    "id": 1,
    "first_name": "Winnah",
    "last_name": "Philipsen",
    "email": "wphilipsen0@lycos.com",
    "gender": "Female",
    "company_name": "Fanoodle",
    "job_title": "Web Developer I",
    "university": "University of Mary Hardin-Baylor",
    "url": "https://acquirethisname.com/fusce/consequat/nulla/nisl/nunc/nisl/duis.jpg?non=id&ligula=mauris&pellentesque=vulputate&ultrices=elementum&phasellus=nullam&id=varius&sapien=nulla&in=facilisi&sapien=cras&iaculis=non&congue=velit&vivamus=nec&metus=nisi"
  },
  {
    "id": 2,
    "first_name": "Diego",
    "last_name": "Foister",
    "email": "dfoister1@bloomberg.com",
    "gender": "Male",
    "company_name": "Agimba",
    "job_title": "Clinical Specialist",
    "university": "Circleville Bible College",
    "url": "http://diigo.com/non/velit/donec/diam/neque.html?erat=sit&fermentum=amet&justo=consectetuer&nec=adipiscing&condimentum=elit&neque=proin&sapien=risus&placerat=praesent&ante=lectus&nulla=vestibulum&justo=quam&aliquam=sapien&quis=varius&turpis=ut&eget=blandit&elit=non&sodales=interdum&scelerisque=in&mauris=ante&sit=vestibulum&amet=ante&eros=ipsum&suspendisse=primis&accumsan=in&tortor=faucibus&quis=orci&turpis=luctus&sed=et&ante=ultrices&vivamus=posuere&tortor=cubilia&duis=curae&mattis=duis&egestas=faucibus&metus=accumsan&aenean=odio&fermentum=curabitur&donec=convallis"
  },
  {
    "id": 3,
    "first_name": "Chicky",
    "last_name": "Sciusscietto",
    "email": "csciusscietto2@arizona.edu",
    "gender": "Female",
    "company_name": "Devify",
    "job_title": "Librarian",
    "university": "Université de Cergy-Pontoise",
    "url": "https://marketwatch.com/cubilia/curae/donec/pharetra/magna.aspx?sapien=justo&urna=maecenas&pretium=rhoncus&nisl=aliquam&ut=lacus&volutpat=morbi&sapien=quis&arcu=tortor&sed=id&augue=nulla&aliquam=ultrices&erat=aliquet&volutpat=maecenas&in=leo&congue=odio&etiam=condimentum&justo=id&etiam=luctus&pretium=nec&iaculis=molestie&justo=sed&in=justo&hac=pellentesque&habitasse=viverra&platea=pede&dictumst=ac&etiam=diam&faucibus=cras&cursus=pellentesque&urna=volutpat&ut=dui&tellus=maecenas&nulla=tristique&ut=est&erat=et&id=tempus&mauris=semper&vulputate=est&elementum=quam&nullam=pharetra&varius=magna&nulla=ac&facilisi=consequat&cras=metus&non=sapien&velit=ut&nec=nunc&nisi=vestibulum&vulputate=ante&nonummy=ipsum&maecenas=primis&tincidunt=in&lacus=faucibus&at=orci&velit=luctus&vivamus=et&vel=ultrices&nulla=posuere&eget=cubilia&eros=curae&elementum=mauris&pellentesque=viverra&quisque=diam&porta=vitae&volutpat=quam&erat=suspendisse&quisque=potenti&erat=nullam&eros=porttitor&viverra=lacus&eget=at&congue=turpis&eget=donec&semper=posuere&rutrum=metus&nulla=vitae&nunc=ipsum&purus=aliquam&phasellus=non&in=mauris&felis=morbi&donec=non&semper=lectus&sapien=aliquam&a=sit"
  },
  {
    "id": 4,
    "first_name": "Zechariah",
    "last_name": "Silversmid",
    "email": "zsilversmid3@amazon.com",
    "gender": "Male",
    "company_name": "Devify",
    "job_title": "Financial Advisor",
    "university": "Technical University of Czestochowa",
    "url": "http://forbes.com/proin/leo/odio/porttitor.jpg?ultrices=mus&posuere=vivamus&cubilia=vestibulum&curae=sagittis&nulla=sapien&dapibus=cum&dolor=sociis&vel=natoque&est=penatibus&donec=et&odio=magnis&justo=dis&sollicitudin=parturient&ut=montes&suscipit=nascetur&a=ridiculus&feugiat=mus&et=etiam&eros=vel&vestibulum=augue&ac=vestibulum&est=rutrum&lacinia=rutrum&nisi=neque&venenatis=aenean&tristique=auctor&fusce=gravida&congue=sem&diam=praesent&id=id&ornare=massa&imperdiet=id&sapien=nisl&urna=venenatis&pretium=lacinia&nisl=aenean&ut=sit&volutpat=amet&sapien=justo&arcu=morbi&sed=ut&augue=odio&aliquam=cras&erat=mi&volutpat=pede&in=malesuada&congue=in&etiam=imperdiet&justo=et&etiam=commodo&pretium=vulputate&iaculis=justo&justo=in&in=blandit&hac=ultrices&habitasse=enim&platea=lorem&dictumst=ipsum&etiam=dolor&faucibus=sit&cursus=amet&urna=consectetuer&ut=adipiscing&tellus=elit&nulla=proin&ut=interdum&erat=mauris&id=non&mauris=ligula&vulputate=pellentesque&elementum=ultrices&nullam=phasellus&varius=id&nulla=sapien&facilisi=in&cras=sapien&non=iaculis&velit=congue&nec=vivamus&nisi=metus&vulputate=arcu&nonummy=adipiscing&maecenas=molestie&tincidunt=hendrerit&lacus=at&at=vulputate&velit=vitae&vivamus=nisl&vel=aenean&nulla=lectus&eget=pellentesque&eros=eget&elementum=nunc&pellentesque=donec&quisque=quis&porta=orci&volutpat=eget&erat=orci&quisque=vehicula"
  },
  {
    "id": 5,
    "first_name": "Zeke",
    "last_name": "Glyne",
    "email": "zglyne4@shinystat.com",
    "gender": "Male",
    "company_name": "Zoonder",
    "job_title": "Nuclear Power Engineer",
    "university": "Fundacion Escuela Colombiana de Rehabiliación",
    "url": "http://house.gov/amet/nunc.jsp?in=sapien&imperdiet=non&et=mi&commodo=integer&vulputate=ac&justo=neque&in=duis&blandit=bibendum&ultrices=morbi&enim=non&lorem=quam&ipsum=nec&dolor=dui&sit=luctus&amet=rutrum&consectetuer=nulla&adipiscing=tellus&elit=in&proin=sagittis&interdum=dui&mauris=vel&non=nisl&ligula=duis&pellentesque=ac&ultrices=nibh&phasellus=fusce&id=lacus&sapien=purus&in=aliquet&sapien=at&iaculis=feugiat&congue=non&vivamus=pretium&metus=quis&arcu=lectus&adipiscing=suspendisse&molestie=potenti&hendrerit=in&at=eleifend&vulputate=quam&vitae=a&nisl=odio&aenean=in&lectus=hac&pellentesque=habitasse&eget=platea&nunc=dictumst&donec=maecenas&quis=ut&orci=massa&eget=quis&orci=augue&vehicula=luctus&condimentum=tincidunt&curabitur=nulla&in=mollis&libero=molestie&ut=lorem&massa=quisque&volutpat=ut&convallis=erat&morbi=curabitur&odio=gravida&odio=nisi&elementum=at&eu=nibh&interdum=in&eu=hac&tincidunt=habitasse&in=platea&leo=dictumst&maecenas=aliquam&pulvinar=augue&lobortis=quam&est=sollicitudin&phasellus=vitae&sit=consectetuer&amet=eget&erat=rutrum&nulla=at&tempus=lorem&vivamus=integer&in=tincidunt&felis=ante&eu=vel&sapien=ipsum&cursus=praesent"
  },
  {
    "id": 6,
    "first_name": "Alexio",
    "last_name": "Cranham",
    "email": "acranham5@foxnews.com",
    "gender": "Male",
    "company_name": "Zoonder",
    "job_title": "Nurse Practicioner",
    "university": "Fachhochschule Krems",
    "url": "http://instagram.com/cras/non/velit/nec.png?montes=ultrices&nascetur=phasellus&ridiculus=id&mus=sapien&etiam=in&vel=sapien&augue=iaculis&vestibulum=congue&rutrum=vivamus&rutrum=metus&neque=arcu&aenean=adipiscing&auctor=molestie&gravida=hendrerit&sem=at&praesent=vulputate&id=vitae&massa=nisl&id=aenean&nisl=lectus&venenatis=pellentesque&lacinia=eget&aenean=nunc&sit=donec&amet=quis&justo=orci&morbi=eget&ut=orci&odio=vehicula"
  },
  {
    "id": 7,
    "first_name": "Almira",
    "last_name": "Bortolussi",
    "email": "abortolussi6@skype.com",
    "gender": "Female",
    "company_name": "Blogtag",
    "job_title": "Financial Analyst",
    "university": "Pontifícia Universidade Católica do Rio de Janeiro",
    "url": "http://symantec.com/a/ipsum/integer/a/nibh.js?rutrum=orci&rutrum=eget&neque=orci&aenean=vehicula&auctor=condimentum&gravida=curabitur&sem=in&praesent=libero&id=ut&massa=massa&id=volutpat&nisl=convallis&venenatis=morbi&lacinia=odio&aenean=odio&sit=elementum&amet=eu&justo=interdum&morbi=eu&ut=tincidunt&odio=in&cras=leo&mi=maecenas&pede=pulvinar&malesuada=lobortis&in=est&imperdiet=phasellus&et=sit&commodo=amet&vulputate=erat&justo=nulla&in=tempus&blandit=vivamus&ultrices=in&enim=felis&lorem=eu&ipsum=sapien&dolor=cursus&sit=vestibulum&amet=proin&consectetuer=eu&adipiscing=mi&elit=nulla&proin=ac&interdum=enim&mauris=in&non=tempor&ligula=turpis&pellentesque=nec&ultrices=euismod&phasellus=scelerisque&id=quam&sapien=turpis&in=adipiscing&sapien=lorem&iaculis=vitae&congue=mattis&vivamus=nibh&metus=ligula"
  },
  {
    "id": 8,
    "first_name": "Maighdiln",
    "last_name": "Yoell",
    "email": "myoell7@cam.ac.uk",
    "gender": "Female",
    "company_name": "Skipstorm",
    "job_title": "Human Resources Assistant III",
    "university": "Kutztown University of Pennsylvania",
    "url": "https://t-online.de/ultrices/posuere/cubilia/curae/donec/pharetra.xml?libero=fringilla&rutrum=rhoncus&ac=mauris&lobortis=enim&vel=leo&dapibus=rhoncus&at=sed&diam=vestibulum"
  },
  {
    "id": 9,
    "first_name": "Allina",
    "last_name": "Sweeny",
    "email": "asweeny8@yale.edu",
    "gender": "Female",
    "company_name": "Thoughtworks",
    "job_title": "Systems Administrator IV",
    "university": "Persian Gulf University",
    "url": "http://netlog.com/elit/ac/nulla/sed/vel/enim/sit.html?ultrices=vitae&phasellus=nisl&id=aenean&sapien=lectus&in=pellentesque&sapien=eget&iaculis=nunc&congue=donec&vivamus=quis&metus=orci&arcu=eget&adipiscing=orci&molestie=vehicula&hendrerit=condimentum&at=curabitur&vulputate=in&vitae=libero&nisl=ut&aenean=massa&lectus=volutpat&pellentesque=convallis&eget=morbi&nunc=odio&donec=odio&quis=elementum&orci=eu&eget=interdum&orci=eu&vehicula=tincidunt&condimentum=in&curabitur=leo&in=maecenas&libero=pulvinar&ut=lobortis&massa=est&volutpat=phasellus&convallis=sit"
  },
  {
    "id": 10,
    "first_name": "Guenna",
    "last_name": "Dell'Abbate",
    "email": "gdellabbate9@yale.edu",
    "gender": "Female",
    "company_name": "Meetz",
    "job_title": "Assistant Media Planner",
    "university": "University for Information Science and Technology  \"St. Paul The Apostle\" ",
    "url": "http://networksolutions.com/scelerisque/quam.json?nulla=sagittis&nisl=nam&nunc=congue&nisl=risus&duis=semper&bibendum=porta&felis=volutpat&sed=quam&interdum=pede&venenatis=lobortis&turpis=ligula&enim=sit&blandit=amet&mi=eleifend&in=pede&porttitor=libero&pede=quis&justo=orci&eu=nullam&massa=molestie&donec=nibh&dapibus=in&duis=lectus&at=pellentesque&velit=at&eu=nulla&est=suspendisse&congue=potenti&elementum=cras&in=in&hac=purus&habitasse=eu&platea=magna&dictumst=vulputate&morbi=luctus&vestibulum=cum&velit=sociis&id=natoque&pretium=penatibus&iaculis=et&diam=magnis&erat=dis&fermentum=parturient&justo=montes&nec=nascetur&condimentum=ridiculus&neque=mus&sapien=vivamus"
  }
];

class PeopleServiceMock {
  async getPeople() {
    return Promise.resolve(peopleMock);
  }

  async createPeople() {
    return Promise.resolve(peopleMock[0]);
  }
}

module.exports = { peopleMock, PeopleServiceMock };