import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';


const username = "a4pratapsingh";

const MediumBlog = () => {
  const [posts, setPosts] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // Add this

  useEffect(() => {
  setIsMounted(true);
  
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@a4pratapsingh`)
    .then(res => res.json())
    .then(data => {
      const articles = data.items.map(item => {
        // If thumbnail is empty, we extract it from the 'content' field
        if (!item.thumbnail || item.thumbnail === "") {
          const imageRegex = /<img[^>]+src="([^">]+)"/; // Finds the first <img> tag src
          const match = item.content.match(imageRegex);
          item.thumbnail = match ? match[1] : 'https://via.placeholder.com/400x200?text=Medium+Blog';
        }
        return item;
      });
      setPosts(articles.slice(0, 3));
    })
    .catch(err => console.error("Blog fetch error:", err));
}, []);

  // If not mounted, return a skeleton or null to prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <section id="blog" className="w-full px-[12%] py-20 scroll-mt-20">
      <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-2 text-lg font-Ovo">
        Latest Insights
      </motion.h4>
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center text-5xl font-Ovo mb-12">
        From My Blog
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            className="flex flex-col bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition-all group"
          >
            {/* Thumbnail */}
            <div className="h-48 overflow-hidden relative">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-xs text-blue-500 font-bold uppercase mb-2">
                {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <h3 className="text-xl font-semibold mb-3 dark:text-white line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                {/* Remove HTML tags from Medium's description */}
                {post.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {post.categories.slice(0, 2).map((cat, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-white/10 rounded uppercase">
                    #{cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href={`https://medium.com/@${username}`} target="_blank" className="inline-flex items-center gap-2 px-8 py-3 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          Read More on Medium <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
};

export default MediumBlog;