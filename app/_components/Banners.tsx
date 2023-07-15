import React, {ReactElement} from 'react';

interface ComponentProps {
    id: string;
    componentData: any;
}


const Banner = ({ id, componentData }: ComponentProps)  => {

    if(id === 'home') {
        return (
            <section className="bg-white dark:bg-gray-900 h-screen">
      <div
        className="grid max-w-screen-xl h-full px-4 py-8 mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-8xl dark:text-white"
          >
            {componentData.title}<span className="text-green-700">.</span>
          </h1>
          <p
            className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-4xl text-white dark:text-white"
          >
            {componentData.subTitle}
          </p>
            <p
            className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl text-white dark:text-white border-l-8 rounded border-yellow-300 py-3 px-8"
          >
            {componentData.payoff}
          </p>
          <a
            href={componentData.link?.url}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-300 dark:focus:ring-gray-900"
          >
            {componentData.link?.title}
          </a>
          <a
            href={componentData.link2?.url}
            target={componentData.link2?.target ?? '_blank'}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {componentData.link2?.title}
          </a>
        </div>
        <div className="hidden place-self-center lg:mt-0 lg:col-span-5 lg:flex">
          <img className="rounded" src={componentData.image?.sourceUrl} alt={componentData.image?.altText} />
        </div>
      </div>
    </section>
        );
    } else {
        return <></>
    }
};

export default Banner;