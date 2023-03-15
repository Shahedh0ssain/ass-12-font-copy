import React from 'react';
import '../Blog/Blog.css'

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-5'>

            <div class="py-5 features_card__G8bhl features_clickable__1xAD6">
                <h3 class="f4 fw6 features_card-heading__Fdjvi">Zero Config</h3>
                <p class="py-2 features_card-body__BagO6">Automatic compilation and bundling. Optimized for production from the start.</p>
                <div class="features_card-link__eLTqA">
                    <a class="link_link__8vjBa link_hoverUnderline___vgMl" href="/docs/getting-started">Documentation →</a>
                </div>
            </div>

            <div class=" py-5 features_card__G8bhl features_clickable__1xAD6">
                <h3 class="f4 fw6 features_card-heading__Fdjvi">Zero Config</h3>
                <p class="features_card-body__BagO6">Automatic compilation and bundling. Optimized for production from the start.</p>
                <div class="features_card-link__eLTqA">
                    <a class="link_link__8vjBa link_hoverUnderline___vgMl" href="/docs/getting-started">Documentation →</a>
                </div>
            </div>

            <div class=" py-5 features_card__G8bhl features_clickable__1xAD6">
                <h3 class="f4 fw6 features_card-heading__Fdjvi">Zero Config</h3>
                <p class="features_card-body__BagO6">Automatic compilation and bundling. Optimized for production from the start.</p>
                <div class="features_card-link__eLTqA">
                    <a class="link_link__8vjBa link_hoverUnderline___vgMl" href="/docs/getting-started">Documentation →</a>
                </div>
            </div>

        </div>
    );
};

export default Blog;