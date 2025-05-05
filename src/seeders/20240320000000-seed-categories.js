'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const getCurrentDate = () => {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      return now.toISOString().slice(0, 19).replace('T', ' ');
    };

    const categories = [
      {
        name: 'Development',
        color: '#007AFF',
        icon: 'code',
        job_count: 0,
        popular_searches: JSON.stringify(['React Native', 'JavaScript', 'Node.js', 'Python', 'Full Stack']),
        is_popular: true,
        created_at: getCurrentDate(),
        updated_at: getCurrentDate()
      },
      {
        name: 'Design',
        color: '#FF9500',
        icon: 'brush',
        job_count: 0,
        popular_searches: JSON.stringify(['UI/UX', 'Figma', 'Adobe XD', 'Product Design', 'Web Design']),
        is_popular: true,
        created_at: getCurrentDate(),
        updated_at: getCurrentDate()
      },
      {
        name: 'Marketing',
        color: '#34C759',
        icon: 'megaphone',
        job_count: 0,
        popular_searches: JSON.stringify(['Digital Marketing', 'SEO', 'Social Media', 'Content Marketing', 'Analytics']),
        is_popular: true,
        created_at: getCurrentDate(),
        updated_at: getCurrentDate()
      },
      {
        name: 'Data Science',
        color: '#5856D6',
        icon: 'analytics',
        job_count: 0,
        popular_searches: JSON.stringify(['Machine Learning', 'Python', 'TensorFlow', 'Deep Learning', 'Data Analysis']),
        is_popular: true,
        created_at: getCurrentDate(),
        updated_at: getCurrentDate()
      }
    ];

    await queryInterface.bulkInsert('categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
}; 