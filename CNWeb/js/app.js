// ---------- NAVBAR ----------
const Navbar = ({ currentPage, setPage, user, setUser, cartItemCount, setIsCartOpen }) => {
    const { useState } = React;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchQuery.trim() !== '') {
            alert('Đang tìm kiếm: ' + searchQuery);
            setPage('courses');
        }
    };

    return (
       <nav className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                        <div className="flex justify-between items-center h-20 gap-4 md:gap-8">
                            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setPage('home')}>
                                <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">EduMaster<span className="text-red-500">.</span></span>
                            </div>

                            <div className="hidden md:flex flex-grow items-center justify-center max-w-2xl relative">
                                <form onSubmit={handleSearch} className="w-full flex">
                                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Tìm kiếm khóa học, giảng viên..." className="w-full bg-gray-100 border-none rounded-l-full py-2.5 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700 text-sm"/>
                                    <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-6 rounded-r-full transition">
                                        <SearchIcon className="w-5 h-5 text-white" />
                                    </button>
                                </form>
                            </div>

                            <div className="hidden md:flex items-center space-x-6">
                                <div className="relative cursor-pointer text-gray-600 hover:text-primary transition" onClick={() => setIsCartOpen(true)}>
                                    <ShoppingCartIcon className="w-7 h-7" />
                                    {cartItemCount > 0 && <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">{cartItemCount}</span>}
                                </div>
                                
                                <div className="w-px h-6 bg-gray-200"></div>

                                {user ? (
                                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('account')}>
                                        <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-semibold text-gray-800">{user.name}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <button onClick={() => setPage('login')} className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-full font-bold text-sm transition duration-300">Đăng nhập</button>
                                )}
                            </div>

                            <div className="flex items-center md:hidden gap-4">
                                <div className="relative cursor-pointer text-gray-600" onClick={() => setIsCartOpen(true)}>
                                    <ShoppingCartIcon className="w-6 h-6" />
                                    {cartItemCount > 0 && <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">{cartItemCount}</span>}
                                </div>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary"><MenuIcon /></button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 items-center space-x-8 text-sm font-medium text-gray-600">
                        <button onClick={() => setPage('home')} className={`hover:text-primary uppercase ${currentPage === 'home' && 'text-primary'}`}>Trang chủ</button>
                        <button onClick={() => setPage('courses')} className={`hover:text-primary uppercase ${currentPage === 'courses' && 'text-primary'}`}>Danh mục Khóa học</button>
                        <button onClick={() => setPage('instructors')} className={`hover:text-primary uppercase ${currentPage === 'instructors' && 'text-primary'}`}>Giảng viên</button>
                        {user && <button onClick={() => setPage('account')} className={`hover:text-primary uppercase ${currentPage === 'account' && 'text-primary'}`}>Tài khoản</button>}
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-lg">
                            <div className="flex flex-col space-y-3">
                                <button onClick={() => { setPage('home'); setIsMenuOpen(false); }} className={`text-left font-medium p-2 rounded-lg ${currentPage === 'home' ? 'bg-orange-50 text-primary' : 'text-gray-600'}`}>Trang chủ</button>
                                <button onClick={() => { setPage('courses'); setIsMenuOpen(false); }} className={`text-left font-medium p-2 rounded-lg ${currentPage === 'courses' ? 'bg-orange-50 text-primary' : 'text-gray-600'}`}>Danh mục Khóa học</button>
                                <button onClick={() => { setPage('instructors'); setIsMenuOpen(false); }} className={`text-left font-medium p-2 rounded-lg ${currentPage === 'instructors' ? 'bg-orange-50 text-primary' : 'text-gray-600'}`}>Giảng viên</button>
                                {user && <button onClick={() => { setPage('account'); setIsMenuOpen(false); }} className={`text-left font-medium p-2 rounded-lg ${currentPage === 'account' ? 'bg-orange-50 text-primary' : 'text-gray-600'}`}>Tài khoản</button>}
                            </div>
                        </div>
                    )}

                </nav>
    );
    
};

// ---------- HOME PAGE ----------
const CourseCard = ({ course, addToCart }) => {
       return (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden course-card flex flex-col h-full group relative">
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        {course.badge && (
                            <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded text-white ${course.badge.toLowerCase() === 'hot' ? 'bg-red-500' : 'bg-green-500'}`}>
                                {course.badge}
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button 
                                onClick={(e) => { e.stopPropagation(); addToCart(course); }}
                                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2">{course.title}</h3>
                        <div className="text-sm text-gray-500 mb-2">{course.instructor}</div>
                        <div className="flex items-center gap-1 mb-2">
                            <span className="text-sm font-bold text-gray-700">{course.rating}</span>
                            <StarIcon />
                            <span className="text-xs text-gray-400">({course.students ? course.students.toLocaleString() : '1,000'})</span>
                        </div>
                        <div className="mt-auto flex items-center gap-2 pt-2 border-t border-gray-50">
                            <span className="text-lg font-black text-primary">{course.price}</span>
                            {course.oldPrice && <span className="text-sm text-gray-400 line-through">{course.oldPrice}</span>}
                        </div>
                    </div>
                </div>
    );
};

const HomePage = ({ setPage, addToCart, user }) => {
    const { useState, useEffect } = React;
    const [currentSlide, setCurrentSlide] = useState(0);
 useEffect(() => {
                const timer = setInterval(() => {
                    setCurrentSlide((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
                }, 5000);
                return () => clearInterval(timer);
            }, []);

            const nextSlide = () => setCurrentSlide(prev => prev === BANNERS.length - 1 ? 0 : prev + 1);
            const prevSlide = () => setCurrentSlide(prev => prev === 0 ? BANNERS.length - 1 : prev - 1);

            return (
                <div className="animate-fade-in pb-20">
                    <div className="relative w-full max-w-7xl mx-auto md:px-8 pt-4 md:pt-8 mb-12">
                        <div className="overflow-hidden md:rounded-2xl relative aspect-[21/9] md:aspect-[21/7] bg-gray-900 shadow-xl">
                            {BANNERS.map((banner, index) => (
                                <div key={banner.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover opacity-60" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-2xl">
                                        <span className="text-orange-400 font-bold uppercase tracking-wider mb-2 text-sm md:text-base">{banner.subtitle}</span>
                                        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{banner.title}</h1>
                                        <div>
                                            <button onClick={() => setPage('courses')} className="bg-primary hover:bg-primary-hover px-6 py-3 rounded-lg font-bold shadow-lg transition transform hover:-translate-y-1 inline-block">Khám phá ngay</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            <button onClick={prevSlide} className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <button onClick={nextSlide} className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                            </button>
                            
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {BANNERS.map((_, index) => (
                                    <button 
                                        key={index} 
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary scale-110' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                        {CATEGORIES.map(category => {
                            const categoryCourses = COURSES.filter(c => c.categoryId === category.id);
                            if(categoryCourses.length === 0) return null;

                            return (
                                <section key={category.id}>
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 border-l-4 border-primary pl-3">{category.name}</h2>
                                            <p className="text-gray-500 mt-1 text-sm md:text-base">Các khóa học nổi bật giúp bạn chinh phục {category.name}</p>
                                        </div>
                                        <button onClick={() => setPage('courses')} className="hidden md:block text-primary font-semibold hover:underline">Xem tất cả</button>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
                                        {categoryCourses.map(course => (
                                            <CourseCard key={course.id} course={course} addToCart={addToCart} />
                                        ))}
                                    </div>
                                    
                                    <div className="mt-6 md:hidden text-center">
                                        <button onClick={() => setPage('courses')} className="border border-primary text-primary px-6 py-2 rounded-full font-medium w-full max-w-xs hover:bg-orange-50">Xem tất cả khóa học</button>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                        <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-orange-100">
                            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-full shadow flex items-center justify-center">
                                <span className="text-4xl font-black text-primary">Sale</span>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Đăng ký thành viên - Nhận ưu đãi lớn</h3>
                                <p className="text-gray-600 mb-4">Mở khóa mã giảm giá 10% cho đơn hàng đầu tiên của bạn khi tạo tải khoản.</p>
                                {!user && (
                                    <button onClick={() => setPage('login')} className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition shadow placeholder">
                                        Đăng ký ngay
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
};

// ---------- COURSES PAGE ----------
 const CoursesPage = ({ setPage, setSelectedCourse, addToCart }) => {
            const { useState } = React;
            const [filter, setFilter] = useState('Tất cả');
            const [searchQuery, setSearchQuery] = useState('');
            const categories = ['Tất cả', 'Tiếng Anh', 'TOEIC', 'IELTS'];

            const filteredCourses = COURSES.filter(c => {
                const matchesCategory = filter === 'Tất cả' || c.category === filter;
                const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Khám Phá Khóa Học</h2>
                        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Tìm khóa học..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full md:w-64 border border-gray-300 rounded-full py-2 px-5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                                />
                                <div className="absolute right-4 top-2.5 text-gray-400">
                                    <EyeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full font-medium transition duration-200 ${filter === cat ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredCourses.map(course => (
                            <div 
                                key={course.id} 
                                onClick={() => {
                                    setSelectedCourse(course.id);
                                    setPage('course-detail');
                                }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col h-full group cursor-pointer relative"
                            >
                                {course.isBestseller && (
                                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                                        Bán chạy
                                    </div>
                                )}
                                <div className="relative overflow-hidden h-48">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105" />
                                </div>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{course.category}</div>
                                        <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 line-clamp-2">{course.title}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mb-4">
                                            <UserIcon /> <span className="mr-3">{course.instructor}</span>
                                            <div className="flex items-center">
                                                <span className="font-bold text-gray-700 mr-1">{course.rating}</span> <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-gray-900">{course.price}</span>
                                            <span className="text-sm text-gray-400 line-through ml-2">{course.oldPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // ---------- COURSE DETAIL PAGE ----------
const CourseDetailPage = ({ courseId, setPage, addToCart }) => {
    const course = COURSES.find(c => c.id === courseId);

    if (!course) {
        return (
            <div className="py-20 text-center animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Không tìm thấy khóa học</h2>
                <button onClick={() => setPage('courses')} className="text-primary hover:underline">Quay lại danh sách khóa học</button>
            </div>
        );
    }

    return (
        <div className="animate-fade-in bg-gray-50 pb-20">
            <div className="bg-gray-900 text-white pt-20 pb-24 px-4 relative flex items-center justify-center border-b-8 border-primary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    <div>
                        <div className="mb-4 text-sm font-bold text-yellow-400 uppercase tracking-widest">{course.category}</div>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{course.title}</h1>
                        <p className="text-lg text-gray-300 mb-6">{course.description}</p>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <StarIcon /> <span className="font-bold text-white">{course.rating}</span> đánh giá
                            </div>
                            <div className="flex items-center gap-2">
                                <UserIcon /> <span className="font-bold text-white">{course.students ? course.students : '1,000'}</span> học viên
                            </div>
                            <div className="flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1">
                                <span className="text-gray-400">Trình độ:</span> <span className="font-medium text-white">{course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-30px] relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Bạn sẽ học được gì?</h3>
                        
                        {/* ĐOẠN ĐÃ CHỈNH SỬA: Tự động lặp qua mảng dữ liệu khóa học tương ứng */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-700">
                            {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 ? (
                                course.whatYouWillLearn.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <p>{item}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm italic col-span-2">Nội dung khóa học đang được cập nhật...</p>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Thông tin giảng viên</h3>
                        <div className="flex items-center gap-6 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
                                <UserIcon className="w-8 h-8"/> 
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">{course.instructor}</h4>
                                <p className="text-primary font-medium text-sm mb-2">Chuyên gia cấp cao trực thuộc Hệ thống</p>
                                <p className="text-sm text-gray-600">Với nhiều năm kinh nghiệm giảng dạy và làm việc, giảng viên cam kết mang đến những phương pháp học hiệu quả, thực tế và tiết kiệm thời gian nhất cho bạn.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-28">
                        <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6 border-b pb-6">
                                <span className="text-4xl font-black text-gray-900">{course.price}</span>
                                <span className="text-lg text-gray-400 line-through font-medium">{course.oldPrice}</span>
                            </div>
                            
                            <ul className="mb-8 space-y-4 text-gray-600 font-medium">
                                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Giáo trình học</span> <span>Online 100%</span></li>
                                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Thời lượng</span> <span>{course.duration}</span></li>
                                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Truy cập</span> <span>Trọn đời</span></li>
                                <li className="flex justify-between pb-2"><span>Thiết bị hỗ trợ</span> <span>Mobile + PC</span></li>
                            </ul>

                            <button onClick={() => addToCart(course)} className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 mb-4">
                                Thêm vào giỏ / Mua ngay
                            </button>
                            <p className="text-xs text-center text-gray-400">Đảm bảo hoàn tiền trong 30 ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <button 
                    onClick={() => setPage('courses')} 
                    className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                    Quay lại danh sách
                </button>
            </div>
        </div>
    );
};

        // ---------- INSTRUCTORS PAGE ----------
        const InstructorsPage = ({ setPage, setSelectedInstructor }) => {
            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in pb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Đội ngũ Giảng Viên Chuyên Gia</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Học hỏi trực tiếp từ những chuyên gia hành nghề thực tế, giàu kinh nghiệm và tận tâm với sự nghiệp giảng dạy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INSTRUCTORS.map(inst => (
                            <div key={inst.id} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-white shadow-md">
                                    <img src={inst.avatar} alt={inst.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{inst.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{inst.title}</p>
                                <div className="bg-gray-50 rounded-lg px-4 py-2 mb-5 w-full">
                                    <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">{inst.courses}</span> Khóa học đang giảng dạy</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        setSelectedInstructor(inst.id);
                                        setPage('instructor-detail');
                                    }}
                                    className="mt-auto w-full border border-gray-200 hover:border-primary text-gray-700 hover:text-primary hover:bg-blue-50 py-2.5 rounded-xl font-medium transition duration-200"
                                >
                                    Xem hồ sơ
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // ---------- LOGIN PAGE ----------
        const LoginPage = ({ setPage, setUser }) => {
            const { useState } = React;
            const [authMode, setAuthMode] = useState('login'); 
            
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [name, setName] = useState('');
            const [showPassword, setShowPassword] = useState(false);
            const [error, setError] = useState('');

            const handleSubmit = (e) => {
                e.preventDefault();
                
                if (!email.includes('@')) {
                    setError('Vui lòng nhập Email hợp lệ.');
                    return;
                }

                if (authMode === 'forgot') {
                    alert('Đã gửi liên kết khôi phục mật khẩu vào email của bạn!');
                    setAuthMode('login');
                    return;
                }

                if (password.length < 6) {
                    setError('Mật khẩu phải có ít nhất 6 ký tự.');
                    return;
                }

                setError('');
                
                if (authMode === 'register') {
                    alert('Đăng ký thành công! Đang đăng nhập tự động...');
                    setUser({ name: name || email.split('@')[0], email });
                    setPage('home');
                } else {
                    alert('Đăng nhập thành công!');
                    setUser({ name: email.split('@')[0], email });
                    setPage('home');
                }
            };

            return (
                <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4 py-12 animate-fade-in relative overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-orange-200/40 rounded-full blur-3xl"></div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md overflow-hidden relative z-10 flex flex-col">
                        <div className="flex border-b border-gray-100 bg-gray-50/50">
                            <button 
                                onClick={() => {setAuthMode('login'); setError('');}} 
                                className={`flex-1 py-4 text-center font-bold text-sm transition ${authMode === 'login' ? 'text-primary border-b-2 border-primary bg-white' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Đăng nhập
                            </button>
                            <button 
                                onClick={() => {setAuthMode('register'); setError('');}} 
                                className={`flex-1 py-4 text-center font-bold text-sm transition ${authMode === 'register' ? 'text-primary border-b-2 border-primary bg-white' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Đăng ký
                            </button>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-gray-900 mb-2">
                                    {authMode === 'login' ? 'Chào mừng bạn!' : authMode === 'register' ? 'Tạo tài khoản mới' : 'Khôi phục mật khẩu'}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {authMode === 'login' ? 'Đăng nhập để tiếp tục lộ trình học tập của bạn.' : authMode === 'register' ? 'Trải nghiệm không giới hạn các khóa học Tiếng Anh.' : 'Nhập email của bạn để nhận liên kết khôi phục.'}
                                </p>
                            </div>

                            {authMode !== 'forgot' && (
                                <>
                                    <button className="flex items-center justify-center w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-medium transition hover:bg-gray-50 hover:shadow-sm mb-6 text-sm">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>
                                        Bằng tài khoản Google
                                    </button>

                                    <div className="relative flex items-center justify-center mb-6">
                                        <hr className="w-full border-gray-200" />
                                        <span className="absolute bg-white px-4 text-xs text-gray-400">hoặc bằng Email</span>
                                    </div>
                                </>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                {authMode === 'register' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ví dụ: Nguyễn Văn A" className="w-full border border-gray-300 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={`w-full border ${error && error.includes('Email') ? 'border-red-500' : 'border-gray-300'} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}/>
                                </div>
                                
                                {authMode !== 'forgot' && (
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className={`w-full border ${error && error.includes('6 ký tự') ? 'border-red-500' : 'border-gray-300'} rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}/>
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-8 text-gray-400 hover:text-gray-600">
                                            <EyeIcon />
                                        </button>
                                    </div>
                                )}

                                {error && <p className="text-red-500 text-xs mt-1 text-center font-medium bg-red-50 p-2 rounded">{error}</p>}

                                {authMode === 'login' && (
                                    <div className="flex justify-end mt-1">
                                        <button type="button" onClick={() => setAuthMode('forgot')} className="text-sm font-medium text-primary hover:underline">Quên mật khẩu?</button>
                                    </div>
                                )}

                                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold transition duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg mt-2 text-sm">
                                    {authMode === 'login' ? 'Đăng nhập' : authMode === 'register' ? 'Đăng ký Miễn phí' : 'Gửi đường liên kết'}
                                </button>
                            </form>

                            {authMode === 'forgot' && (
                                <p className="text-center text-sm text-gray-500 mt-8">
                                    <button onClick={() => setAuthMode('login')} className="font-bold text-gray-700 hover:text-primary hover:underline">← Quay lại đăng nhập</button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        // ---------- CART DRAWER ----------
        const CartDrawer = ({ isOpen, setIsOpen, cart, removeFromCart, checkout }) => {
            if (!isOpen) return null;

            const calculateTotal = () => {
                return cart.reduce((total, course) => {
                    const price = parseInt(course.price.replace(/\D/g, ''));
                    return total + price;
                }, 0).toLocaleString('vi-VN') + 'đ';
            };

            return (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)}></div>
                    <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-fade-in translate-x-0">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h2 className="text-xl font-bold text-gray-900">Giỏ Hàng Của Bạn</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                        
                        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-4">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <ShoppingCartIcon className="w-16 h-16 mb-4 text-gray-200" />
                                    <p>Chưa có khóa học nào trong giỏ</p>
                                </div>
                            ) : (
                                cart.map(course => (
                                    <div key={course.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm relative pr-10">
                                        <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded-lg" />
                                        <div className="flex flex-col">
                                            <h4 className="font-bold text-sm text-gray-900 line-clamp-2 mb-1">{course.title}</h4>
                                            <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>
                                            <span className="font-bold text-primary mt-auto">{course.price}</span>
                                        </div>
                                        <button onClick={() => removeFromCart(course.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        
                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-600 font-medium">Tổng tiền:</span>
                                <span className="text-2xl font-black text-primary">{calculateTotal()}</span>
                            </div>
                            <button 
                                disabled={cart.length === 0}
                                onClick={checkout}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30 transform hover:-translate-y-1'}`}
                            >
                                Thanh Toán Ngay
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        // ---------- INSTRUCTOR DETAIL PAGE ----------
        const InstructorDetailPage = ({ instructorId, setPage }) => {
            const instructor = INSTRUCTORS.find(i => i.id === instructorId);
            if (!instructor) return <div className="py-20 text-center">Không tìm thấy giảng viên</div>;

            return (
                <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
                    <button onClick={() => setPage('instructors')} className="flex items-center gap-2 text-primary mb-8 hover:underline">← Quay lại danh sách giảng viên</button>
                    <div className="bg-white rounded-3xl shadow-xl p-10">
                        <div className="flex flex-col md:flex-row gap-10">
                            <img src={instructor.avatar} alt={instructor.name} className="w-52 h-52 rounded-2xl object-cover shadow-lg" />
                            <div>
                                <h1 className="text-4xl font-bold">{instructor.name}</h1>
                                <p className="text-primary text-xl">{instructor.title}</p>
                                <p className="mt-6 text-gray-600 leading-relaxed">{instructor.bio}</p>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div><strong>Kinh nghiệm:</strong> {instructor.experience}</div>
                                    <div><strong>Chuyên môn:</strong> {instructor.specialty}</div>
                                    <div><strong>Chứng chỉ:</strong> {instructor.certificates}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // ---------- ACCOUNT PAGE ----------
        const AccountPage = ({ user, myCourses }) => {
            return (
                <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-24 h-24 bg-primary text-white rounded-2xl flex items-center justify-center text-5xl font-bold">{user.name.charAt(0)}</div>
                            <div>
                                <h1 className="text-3xl font-bold">{user.name}</h1>
                                <p className="text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-6">Khóa học đã đăng ký ({myCourses.length})</h2>
                        {myCourses.length === 0 ? (
                            <p className="text-center py-16 text-gray-500">Bạn chưa có khóa học nào.</p>
                        ) : (
                            myCourses.map(course => (
                                <div key={course.id} className="border border-gray-100 rounded-2xl p-6 mb-6 flex gap-6">
                                    <img src={course.image} className="w-32 h-24 object-cover rounded-xl" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">{course.title}</h3>
                                        <p className="text-gray-500">Giảng viên: {course.instructor}</p>
                                        <div className="flex gap-8 mt-3 text-sm">
                                            <div>Bắt đầu: <strong>{course.startDate}</strong></div>
                                            <div>Kết thúc: <strong>{course.endDate}</strong></div>
                                        </div>
                                        <div className="mt-4 bg-gray-200 h-2.5 rounded-full">
                                            <div className="bg-primary h-2.5 rounded-full" style={{width: `${course.progress}%`}}></div>
                                        </div>
                                        <p className="text-right text-xs mt-1">{course.progress}% hoàn thành</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            );
        };

// ==================== FOOTER ====================
const Footer = ({ setPage }) => {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-600 pt-16 pb-8 mt-auto w-full block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Cột 1: Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-4 cursor-pointer" onClick={() => setPage('home')}>
                            <span className="text-3xl font-extrabold text-orange-600 tracking-tight">EduMaster</span>
                            <span className="text-orange-500 text-3xl font-bold">.</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Nền tảng học tiếng Anh trực tuyến hàng đầu Việt Nam. 
                            Giúp bạn tự tin giao tiếp và chinh phục các kỳ thi quốc tế.
                        </p>
                    </div>

                    {/* Cột 2: Khóa học */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-4 text-base">Khóa Học</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => setPage('courses')} className="hover:text-orange-600 transition text-left">Tất cả khóa học</button></li>
                            <li><button onClick={() => setPage('courses')} className="hover:text-orange-600 transition text-left">Tiếng Anh Giao Tiếp</button></li>
                            <li><button onClick={() => setPage('courses')} className="hover:text-orange-600 transition text-left">Luyện Thi TOEIC</button></li>
                        </ul>
                    </div>

                    {/* Cột 3: Công ty */}
                   <div>
    <h3 className="text-gray-900 font-bold mb-4 text-base">Khám Phá</h3>
    <ul className="space-y-2 text-sm">
        <li>
            <a 
                href="https://www.iigvietnam.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-600 transition text-left block"
            >
                Đăng ký TOEIC
            </a>
        </li>
        <li>
            <a 
                href="https://ielts.idp.com/vietnam/book-my-test" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-600 transition text-left block"
            >
                Đăng ký IELTS
            </a>
        </li>
    </ul>
</div>

                    {/* Cột 4: Hỗ trợ */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-4 text-base">Hỗ Trợ</h3>
                
                        <div className="mt-6">
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Hotline hỗ trợ</p>
                            <p className="text-orange-600 font-bold text-lg">1800 123 456</p>
                        </div>
                    </div>
                </div>

                {/* Thanh bản quyền dưới cùng */}
                <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-400">
                    © 2026 EduMaster. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

// ---------- MAIN APP COMPONENT ----------
const App = () => {
    const { useState } = React;
      const [currentPage, setCurrentPage] = useState('home');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [myCourses, setMyCourses] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (course) => {
        if (!cart.find(c => c.id === course.id)) {
            setCart([...cart, course]);
            setIsCartOpen(true);
        } else {
            alert('Khóa học này đã có trong giỏ hàng!');
        }
    };

    const removeFromCart = (courseId) => {
        setCart(cart.filter(c => c.id !== courseId));
    };

   
    const checkout = () => {
        if (cart.length === 0) return;
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        const purchased = cart.map(course => {
            const endDate = new Date(today);
            
            
            const durationValue = course.duration ? parseFloat(course.duration) : 1; 
            
            if (course.duration && course.duration.includes('Tháng')) {
                const months = Math.floor(durationValue);
                const days = Math.round((durationValue - months) * 30); 
                
                endDate.setMonth(endDate.getMonth() + months);
                endDate.setDate(endDate.getDate() + days);
            } else {
                
                endDate.setMonth(endDate.getMonth() + 1);
            }

            return {
                ...course,
                startDate: todayStr,
                endDate: endDate.toISOString().split('T')[0],
                progress: 10
            };
        });

        setMyCourses([...myCourses, ...purchased]);
        setCart([]);
        setIsCartOpen(false);
        alert('Thanh toán thành công!');
        setCurrentPage('account');
    };
   

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <HomePage setPage={setCurrentPage} addToCart={addToCart} user={user} />;
            case 'courses': return <CoursesPage setPage={setCurrentPage} setSelectedCourse={setSelectedCourse} addToCart={addToCart} />;
            case 'instructors': return <InstructorsPage setPage={setCurrentPage} setSelectedInstructor={setSelectedInstructor} />;
            case 'instructor-detail': return <InstructorDetailPage instructorId={selectedInstructor} setPage={setCurrentPage} />;
            case 'course-detail': return <CourseDetailPage courseId={selectedCourse} setPage={setCurrentPage} addToCart={addToCart} />;
            case 'account': return <AccountPage user={user} myCourses={myCourses} />;
            case 'login': return <LoginPage setPage={setCurrentPage} setUser={setUser} />;
            default: return <HomePage setPage={setCurrentPage} addToCart={addToCart} user={user} />;
        }
    };
   return (
        <div className="min-h-screen flex flex-col font-sans select-none overflow-x-hidden relative">
            <CartDrawer 
                isOpen={isCartOpen} 
                setIsOpen={setIsCartOpen} 
                cart={cart} 
                removeFromCart={removeFromCart} 
                checkout={checkout} 
            />
            
            <Navbar 
                currentPage={currentPage} 
                setPage={setCurrentPage} 
                user={user} 
                setUser={setUser} 
                cartItemCount={cart.length} 
                setIsCartOpen={setIsCartOpen} 
            />
            
            {}
            <main className="flex-grow bg-light-bg pb-12">
                {renderPage()}
            </main>

            {/* QUAN TRỌNG: Phải truyền prop setPage vào đây để kích hoạt Footer hiển thị và hoạt động */}
            <Footer setPage={setCurrentPage} />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));