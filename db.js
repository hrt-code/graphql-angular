module.exports = {
  posts: [
      { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
      { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  users: [
      { id: 123, name: "John Doe","email": "John@example.com"},
      { id: 456, name: "Jane Doe","email": "Jane@example.com"}
  ],
  comments: [
      { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
      { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ],
  survey:[
    { id: 987, isActive: true,introPage:{},outroPage:{},questions:{},  
    title: "Consectetur ", startDateTime: new Date('2025-07-03'), endDateTime: new Date('2025-11-03')},
    { id: 995, isActive: true,introPage:{},outroPage:{},questions:{},  
    title: "Supermarket", startDateTime: new Date('2025-08-17'),endDateTime: new Date('2025-12-17') }
  ] 

}
