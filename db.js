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
  ]
}