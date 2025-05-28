
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'L\'impact de l\'éducation sur le développement durable en Afrique',
    excerpt: 'Découvrez comment nos programmes éducatifs transforment la vie des communautés et contribuent aux objectifs de développement durable.',
    content: 'Une analyse approfondie de nos 5 années d\'action sur le terrain...',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop',
    author: 'Marie Dubois',
    date: '10 Décembre 2024',
    readTime: '8 min',
    category: 'Éducation'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Comment garantir l\'accès à l\'eau potable dans les zones rurales',
      excerpt: 'Les défis et solutions pour apporter l\'eau potable aux communautés les plus isolées.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22e4df12b?w=400&h=250&fit=crop',
      author: 'Pierre Martin',
      date: '5 Décembre 2024',
      readTime: '6 min',
      category: 'Eau'
    },
    {
      id: 3,
      title: 'Témoignage : Une école change la vie d\'un village entier',
      excerpt: 'L\'histoire inspirante du village de Kayes au Mali et de sa nouvelle école.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop',
      author: 'Sophie Leroy',
      date: '1 Décembre 2024',
      readTime: '5 min',
      category: 'Témoignage'
    },
    {
      id: 4,
      title: 'Nutrition infantile : prévenir la malnutrition dès le plus jeune âge',
      excerpt: 'Nos stratégies pour lutter contre la malnutrition et assurer une croissance saine.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop',
      author: 'Dr. Ahmed Hassan',
      date: '28 Novembre 2024',
      readTime: '7 min',
      category: 'Santé'
    },
    {
      id: 5,
      title: 'L\'importance de la participation communautaire dans nos projets',
      excerpt: 'Pourquoi nous impliquons toujours les communautés locales dans nos initiatives.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
      author: 'Fatou Diallo',
      date: '25 Novembre 2024',
      readTime: '4 min',
      category: 'Communauté'
    },
    {
      id: 6,
      title: 'Bilan 2024 : vos dons en action',
      excerpt: 'Retour sur une année exceptionnelle grâce à votre générosité et votre engagement.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
      author: 'Marie Dubois',
      date: '20 Novembre 2024',
      readTime: '10 min',
      category: 'Bilan'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Éducation': return 'bg-charity-blue';
      case 'Eau': return 'bg-cyan-500';
      case 'Santé': return 'bg-charity-green';
      case 'Témoignage': return 'bg-charity-orange';
      case 'Communauté': return 'bg-purple-500';
      case 'Bilan': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charity-blue to-charity-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Notre Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Actualités, témoignages et analyses sur nos actions humanitaires
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-4 ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </div>
                <h2 className="font-playfair text-3xl font-bold text-charity-darkGray mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  {featuredPost.date}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {featuredPost.readTime}
                </div>
                <Button className="bg-charity-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-charity-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-12 text-center">
            Derniers Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-charity-darkGray text-xl mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                    <Calendar className="w-3 h-3 ml-3 mr-1" />
                    {post.date}
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-charity-orange group-hover:text-white group-hover:border-charity-orange transition-all duration-300">
                    Lire plus <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg">
              Voir tous les articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
