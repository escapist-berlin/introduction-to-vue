const App = {
  data() {
    return {
      selected: '',
      categories: ['science', 'math', 'poetry', 'history'],
      posts: [
      {
        author: '@vFitzgerald',
        title: 'Quod Ducimus Omnis',
        label: 'science' },

      {
        author: '@mPalmer',
        title: 'Vero Eius Laboriosam Ex Repudiandae',
        label: 'math' },

      {
        author: '@mDean',
        title: 'Magnam Odit',
        label: 'science' },

      {
        author: '@tCole',
        title: 'Velit Mollitia Voluptates Assumenda',
        label: 'science' },

      {
        author: '@jCooper',
        title: 'Eum Commodi Cupiditate',
        label: 'poetry' },

      {
        author: '@lLamb',
        title: 'Amet',
        label: 'history' },

      {
        author: '@fMartin',
        title: 'Voluptatem Fuga Cum Asperiores Error',
        label: 'science' },

      {
        author: '@eHayes',
        title: 'Ipsa Consectetur Rerum Repellat Quia',
        label: 'math' },

      {
        author: '@cCollier',
        title: 'Dolor Nihil Delectus',
        label: 'science' },

      {
        author: '@cBenson',
        title: 'Labore Ipsum Ad Pariatur',
        label: 'poetry' }
      ],

      newTitle: '',
      newAuthor: '',
      newLabel: '' };

  },
  methods: {
    addBlog() {
      this.posts.push({
        title: this.newTitle,
        author: this.newAuthor,
        label: this.newLabel
      })
      this.newTitle = ''
      this.newAuthor = ''
      this.newLabel = ''
    }
  },
  computed: {
    filteredBlogs() {
      let filter = new RegExp(this.selected, 'i')
      return this.posts.filter(post => post.label.match(filter))
    }
  }
};


Vue.createApp(App).mount('#app');
