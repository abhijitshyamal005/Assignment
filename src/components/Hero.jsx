

const Hero = () => {
    return (
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6"> We have really sped up our workflow</h1>
              <p className="text-lg text-gray-600 mb-8">We have just released a new update! Check out the all new dashboard view. Pages and now load faster, you can try us for free for 30 days.</p>
              <p className="text-gray-600 mb-8">Join 4,000+ companies already growing.</p>
            <div className="flex">
              <button className=" text-black border-black  py-2 px-4 rounded-md mr-4 border-solid border-2 border-gray-500 ">Start Learning Today</button>
              <button className="bg-purple-400  text-white font-bold py-2 px-4 rounded-md">Join Now</button>
            </div>
            </div>
          </div>
          <div className="container mx-auto mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/00/javascript-1837425_960_720.png" className="w-16 h-16" alt="JavaScript" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/react-2587205_960_720.png" className="w-16 h-16" alt="React" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">React</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/angular-2587203_960_720.png" className="w-16 h-16" alt="Angular" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Angular</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/vue-2587206_960_720.png" className="w-16 h-16" alt="Vue" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Vue</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/flutter-2587204_960_720.png" className="w-16 h-16" alt="Flutter" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Flutter</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/00/javascript-1837425_960_720.png" className="w-16 h-16" alt="Node.js" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Node.js</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/aws-2587201_960_720.png" className="w-16 h-16" alt="AWS" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">AWS</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-100">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/google-cloud-2587202_960_720.png" className="w-16 h-16" alt="Google Cloud" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Google Cloud</h3>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Hero