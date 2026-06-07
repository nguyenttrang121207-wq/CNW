// ---------- DATA ----------
const CATEGORIES = [
    { id: 'c1', name: 'Tiếng Anh Cơ Bản', slug: 'tieng-anh-co-ban' },
    { id: 'c2', name: 'Tiếng Anh Nâng Cao', slug: 'tieng-anh-nang-cao' },
    { id: 'c3', name: 'Tiếng Anh Giao Tiếp', slug: 'tieng-anh-giao-tiep' },
    { id: 'c4', name: 'Tiếng Anh TOEIC', slug: 'tieng-anh-toeic' }
];

const BANNERS = [
    { id: 1, image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Siêu Sale Khóa Học Tiếng Anh', subtitle: 'Giảm đến 50% tất cả Combo' },
    { id: 2, image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Luyện Thi TOEIC Cấp Tốc', subtitle: 'Học ngay cùng chuyên gia' }
];

const COURSES = [
    { 
        id: 101, 
        categoryId: 'c1', 
        category: 'Tiếng Anh', 
        title: 'Tiếng Anh Mất Gốc - Lấy Lại Căn Bản Trong 30 Ngày', 
        instructor: 'Thầy Minh', 
        rating: 4.8, 
        oldPrice: '2,000,000đ', 
        price: '999,000đ', 
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 5120, 
        description: 'Lấy lại căn bản nhanh chóng.', 
        duration: '3 Tháng', 
        level: 'Cơ bản', 
        isBestseller: true,
        whatYouWillLearn: [
            "Xây dựng lại toàn bộ nền tảng từ vựng và ngữ pháp cốt lõi nhất",
            "Vượt qua nỗi sợ tiếng Anh và hình thành tư duy phản xạ cơ bản",
            "Nghe hiểu và trả lời trôi chảy các chủ đề giao tiếp thông dụng hàng ngày",
            "Phương pháp tự học hiệu quả giúp ghi nhớ từ vựng lâu gấp 3 lần"
        ]
    },
    { 
        id: 102, 
        categoryId: 'c1', 
        category: 'Tiếng Anh', 
        title: 'Ngữ Pháp Tiếng Anh Từ Zero Đến Hero', 
        instructor: 'Cô Anna', 
        rating: 4.6, 
        oldPrice: '1,500,000đ', 
        price: '799,000đ', 
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'New', 
        students: 1200, 
        description: 'Chinh phục ngữ pháp.', 
        duration: '3 Tháng', 
        level: 'Cơ bản', 
        isBestseller: false,
        whatYouWillLearn: [
            "Hệ thống hóa toàn diện các thì và cấu trúc câu từ cơ bản đến nâng cao",
            "Nắm vững bản chất ngữ pháp để tự tin viết câu đúng mà không cần dịch từ tiếng Việt",
            "Làm chủ cách sử dụng từ loại (danh từ, động từ, tính từ, trạng từ) chính xác",
            "Xóa bỏ các lỗi sai ngữ pháp kinh điển thường gặp khi nói và viết"
        ]
    },
    { 
        id: 103, 
        categoryId: 'c1', 
        category: 'Tiếng Anh', 
        title: 'Phát Âm Tiếng Anh Chuẩn IPA', 
        instructor: 'Thầy John', 
        rating: 4.9, 
        oldPrice: '1,200,000đ', 
        price: '599,000đ', 
        image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: '', 
        students: 3400, 
        description: 'Phát âm chuẩn.', 
        duration: '3 Tháng', 
        level: 'Cơ bản', 
        isBestseller: false,
        whatYouWillLearn: [
            "Làm chủ khẩu hình và cách đặt hơi của toàn bộ 44 âm trong bảng IPA",
            "Tự nhìn phiên âm quốc tế trong từ điển để đọc chuẩn xác từ mới",
            "Sửa triệt để lỗi nuốt âm đuôi (Ending sounds) thường gặp của người Việt",
            "Ứng dụng nguyên tắc nối âm và nuốt âm để giọng nói tự nhiên như người bản xứ"
        ]
    },
    { 
        id: 104, 
        categoryId: 'c1', 
        category: 'Tiếng Anh', 
        title: 'Tiếng Anh Căn Bản Cho Người Đi Làm', 
        instructor: 'Thầy Minh', 
        rating: 4.7, 
        oldPrice: '2,500,000đ', 
        price: '1,299,000đ', 
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 2800, 
        description: 'Dành cho dân văn phòng.', 
        duration: '3 Tháng', 
        level: 'Trung cấp', 
        isBestseller: true,
        whatYouWillLearn: [
            "Làm quen với các tình huống giao tiếp thiết yếu tại môi trường công sở",
            "Kỹ năng viết Email, báo cáo bằng tiếng Anh chuyên nghiệp và lịch sự",
            "Xây dựng vốn từ vựng chuyên ngành cơ bản phục vụ cho công việc hàng ngày",
            "Tự tin trả lời phỏng vấn xin việc và giới thiệu bản thân ấn tượng"
        ]
    },
    { 
        id: 201, 
        categoryId: 'c3', 
        category: 'Tiếng Anh', 
        title: 'Tiếng Anh Giao Tiếp Công Sở Chuyên Nghiệp', 
        instructor: 'Cô Sarah', 
        rating: 4.8, 
        oldPrice: '3,000,000đ', 
        price: '1,590,000đ', 
        image: 'https://tse2.mm.bing.net/th/id/OIP.rn8uVH6sMOurPnVHYKNQ9AHaEi?pid=Api&h=220&P=0', 
        badge: 'Hot', 
        students: 4500, 
        description: 'Giao tiếp công sở', 
        duration: '3 Tháng', 
        level: 'Trung cấp', 
        isBestseller: true,
        whatYouWillLearn: [
            "Làm chủ ngôn từ để đàm phán, thương lượng và thuyết phục đối tác",
            "Kỹ năng thuyết trình dự án mượt mà và trả lời câu hỏi phản biện tự tin",
            "Cách điều phối và đóng góp ý kiến hiệu quả trong các cuộc họp quốc tế",
            "Ứng xử tinh tế, chuyên nghiệp qua các tình huống xã giao tại văn phòng"
        ]
    },
    { 
        id: 301, 
        categoryId: 'c4', 
        category: 'TOEIC', 
        title: 'Luyện Thi TOEIC 800+ Kỹ Năng Nghe Đọc', 
        instructor: 'Thầy John', 
        rating: 4.9, 
        oldPrice: '2,800,000đ', 
        price: '1,399,000đ', 
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 6200, 
        description: 'Cam kết đầu ra 800+', 
        duration: '5 Tháng', 
        level: 'Trung cấp', 
        isBestseller: true,
        whatYouWillLearn: [
            "Chiến thuật nâng cao ăn trọn điểm các phần nghe Part 3, 4 khó",
            "Kỹ năng quản lý thời gian để hoàn thành bài đọc Part 7 dài hơi",
            "Mở rộng kho từ vựng học thuật và thương mại chuyên sâu của kỳ thi TOEIC",
            "Phương pháp bóc tách các 'bẫy' ngữ pháp tinh vi trong cấu trúc đề thi mới"
        ]
    },
    { 
        id: 401, 
        categoryId: 'c2', 
        category: 'IELTS', 
        title: 'IELTS Mastery 7.5+ - Lộ Trình Toàn Diện', 
        instructor: 'Cô Sarah', 
        rating: 4.9, 
        oldPrice: '4,500,000đ', 
        price: '2,990,000đ', 
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 4800, 
        description: 'Mục tiêu 7.5+', 
        duration: '6 Tháng', 
        level: 'Nâng cao', 
        isBestseller: true,
        whatYouWillLearn: [
            "Phát triển toàn diện chiến thuật xử lý đề thi cho cả 4 kỹ năng Nghe-Nói-Đọc-Viết",
            "Nâng cấp tư duy phản biện và triển khai ý tưởng logic cho phần Writing",
            "Tự tin trả lời Speaking dài, mạch lạc với từ vựng thuộc band điểm cao",
            "Cọ xát liên tục với ngân hàng đề thi thật IELTS cập nhật mới nhất"
        ]
    },
    { 
        id: 202, 
        categoryId: 'c3', 
        category: 'Tiếng Anh', 
        title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên Cho Người Mới Bắt Đầu', 
        instructor: 'Cô Anna', 
        rating: 4.7, 
        oldPrice: '1,800,000đ', 
        price: '899,000đ', 
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'New', 
        students: 1550, 
        description: 'Tập trung phản xạ nghe nói tự nhiên, xóa bỏ nỗi sợ nói tiếng Anh.', 
        duration: '2 Tháng', 
        level: 'Cơ bản', 
        isBestseller: false,
        whatYouWillLearn: [
            "Phá bỏ tâm lý ngại ngùng, hình thành phản xạ bật nói tự nhiên không cần dịch nhẩm",
            "Làm chủ hơn 500 từ vựng và cấu trúc giao tiếp thông dụng nhất",
            "Tập trung thực hành nghe nói thông qua các ngữ cảnh đời sống thực tế",
            "Luyện ngữ điệu lên xuống cơ bản giúp câu nói tự nhiên và có cảm xúc"
        ]
    },
    { 
        id: 203, 
        categoryId: 'c3', 
        category: 'Tiếng Anh', 
        title: 'Bí Quyết Trở Thành Cao Thủ Giao Tiếp Tiếng Anh Trôi Chảy', 
        instructor: 'Thầy John', 
        rating: 4.9, 
        oldPrice: '2,600,000đ', 
        price: '1,450,000đ', 
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 3900, 
        description: 'Làm chủ các chủ đề giao tiếp nâng cao, sửa ngọng và sửa ngữ điệu.', 
        duration: '3 Tháng', 
        level: 'Trung cấp', 
        isBestseller: true,
        whatYouWillLearn: [
            "Nâng cấp kỹ năng giao tiếp tiếng Anh trôi chảy về các chủ đề xã hội chuyên sâu",
            "Ứng dụng từ lóng (Slang) và thành ngữ (Idioms) chuẩn xác như người bản xứ",
            "Kỹ thuật kéo dài cuộc hội thoại linh hoạt và dẫn dắt câu chuyện lôi cuốn",
            "Tinh chỉnh toàn bộ ngữ điệu câu, sửa các lỗi phát âm và nói ngọng"
        ]
    },
    { 
        id: 302, 
        categoryId: 'c4', 
        category: 'TOEIC', 
        title: 'Bứt Phá Thần Tốc TOEIC 550+ Cho Người Mất Gốc', 
        instructor: 'Thầy Minh', 
        rating: 4.6, 
        oldPrice: '1,900,000đ', 
        price: '950,000đ', 
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: '', 
        students: 2100, 
        description: 'Lấy lại nền tảng ngữ pháp và mẹo làm bài thi TOEIC cơ bản cực dễ hiểu.', 
        duration: '2 Tháng', 
        level: 'Cơ bản', 
        isBestseller: false,
        whatYouWillLearn: [
            "Học nhanh những chủ điểm ngữ pháp trọng tâm chắc chắn xuất hiện trong đề",
            "Mẹo nhận biết từ loại và chọn đáp án nhanh trong Part 5 chưa đầy 10 giây",
            "Chiến thuật nghe bắt từ khóa (Keywords) để ăn điểm Part 1 và Part 2",
            "Xây dựng lộ trình phân bổ thời gian làm bài hợp lý chống liệt đọc hiểu"
        ]
    },
    { 
        id: 303, 
        categoryId: 'c4', 
        category: 'TOEIC', 
        title: 'Giải Đề TOEIC Cấp Tốc - Chinh Phục Điểm Số Tối Đa', 
        instructor: 'Cô Sarah', 
        rating: 4.8, 
        oldPrice: '2,200,000đ', 
        price: '1,199,000đ', 
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 4200, 
        description: 'Chiến thuật thực chiến giải đề ETS mới nhất, tránh mọi bẫy trong đề thi.', 
        duration: '1.5 Tháng', 
        level: 'Nâng cao', 
        isBestseller: true,
        whatYouWillLearn: [
            "Thực chiến giải liên tục các bộ đề ETS và Hacker bám sát đề thi thật nhất",
            "Kỹ năng bóc tách, nhận diện và né tránh toàn bộ các bẫy tinh vi của đề thi",
            "Phương pháp đọc lướt (Skimming) và đọc quét (Scanning) thông tin cực nhanh",
            "Tổng hợp lại các lỗi sai hay mất điểm oan sau mỗi đề thi thử trực tuyến"
        ]
    },
    { 
        id: 404, 
        categoryId: 'c2', 
        category: 'IELTS', 
        title: 'IELTS Writing Task 1 & 2 Chuyên Sâu - Đột Phá Band 8.0', 
        instructor: 'Thầy John', 
        rating: 4.9, 
        oldPrice: '3,500,000đ', 
        price: '1,999,000đ', 
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'Hot', 
        students: 1800, 
        description: 'Tư duy triển khai ý tưởng logic, nâng cấp từ vựng học thuật C1/C2 và cấu trúc ngữ pháp phức tạp.', 
        duration: '3 Tháng', 
        level: 'Nâng cao', 
        isBestseller: true,
        whatYouWillLearn: [
            "Tư duy triển khai ý tưởng luận điểm logic bám sát tiêu chí Task Response",
            "Công thức cấu trúc bài viết chuẩn mực, mạch lạc cho mọi dạng đề bài",
            "Cung cấp và hướng dẫn áp dụng kho từ vựng học thuật nâng cao thuộc cấp độ C1/C2",
            "Học cách phối hợp nhuần nhuyễn giữa câu đơn, câu phức và câu ghép linh hoạt"
        ]
    },
    { 
        id: 402, 
        categoryId: 'c2', 
        category: 'IELTS', 
        title: 'IELTS Speaking Advanced - Phản Xạ Tự Nhiên & Nâng Band Thần Tốc', 
        instructor: 'Cô Sarah', 
        rating: 4.8, 
        oldPrice: '4,000,000đ', 
        price: '2,450,000đ', 
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: 'New', 
        students: 950, 
        description: 'Luyện nói 1-1 với các chủ đề Speaking khó lạ, sửa phát âm chuẩn ghi điểm tiêu chí Fluency và Lexical Resource.', 
        duration: '4 Tháng', 
        level: 'Nâng cao', 
        isBestseller: false,
        whatYouWillLearn: [
            "Chiến thuật mở rộng câu trả lời cho Part 2 và Part 3 trôi chảy, logic",
            "Ứng dụng Idioms và cụm từ nâng cao một cách tự nhiên để tối ưu điểm Vocabulary",
            "Nâng cấp phản xạ nói ngay lập tức đối với những chủ đề độc, lạ và khó",
            "Được chỉnh sửa lỗi phát âm chuẩn ghi điểm tuyệt đối tiêu chí Fluency & Coherence"
        ]
    },
    { 
        id: 403, 
        categoryId: 'c2', 
        category: 'IELTS', 
        title: 'Chiến Thuật Max Điểm IELTS Reading & Listening (Target 8.5+)', 
        instructor: 'Thầy Minh', 
        rating: 4.7, 
        oldPrice: '3,200,000đ', 
        price: '1,699,000đ', 
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
        badge: '', 
        students: 1100, 
        description: 'Phương pháp Skimming/Scanning nâng cao, bóc tách các "bẫy" tinh vi từ đề thi Cambridge mới nhất.', 
        duration: '3 Tháng', 
        level: 'Nâng cao', 
        isBestseller: false,
        whatYouWillLearn: [
            "Làm chủ kỹ thuật Skimming & Scanning nâng cao để định vị thông tin siêu tốc",
            "Mẹo bóc tách từ đồng nghĩa (Paraphrasing) để xử lý dạng bài Multiple Choice, Headings",
            "Chiến thuật nghe bắt âm và dự đoán từ loại chính xác cho bài thi nghe",
            "Bí kíp tập trung cao độ vượt qua áp lực phòng thi trong suốt chặng thi dài"
        ]
    }
];

const INSTRUCTORS = [
    { 
        id: 1, 
        name: 'Cô Anna', 
        title: 'Thạc sĩ Ngôn ngữ học - Chuyên gia Đào tạo Giao tiếp cấp cao', 
        courses: 14, 
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', 
        bio: 'Với hơn 12 năm nghiên cứu và giảng dạy, Cô Anna đã xây dựng phương pháp phản xạ độc quyền, đồng hành giúp hơn 4.000 học viên xóa bỏ hoàn toàn nỗi sợ nói tiếng Anh và thăng tiến trong môi trường tập đoàn đa quốc gia.', 
        experience: '12 năm', 
        specialty: 'Tiếng Anh Giao tiếp Biện luận & Phản xạ Tự nhiên', 
        certificates: 'Thạc sĩ TESOL (Đại học Sydney), Chứng chỉ Giảng dạy Cao cấp CELTA (Cambridge)' 
    },
    { 
        id: 2, 
        name: 'Thầy John', 
        title: 'Chuyên gia Khảo thí Quốc tế - Cựu Giám khảo chấm thi ETS', 
        courses: 21, 
        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', 
        bio: 'Chuyên gia luyện thi TOEIC hàng đầu với 15 năm kinh nghiệm thực chiến. Thầy là người nắm rõ tư duy ra đề của ETS, giúp hơn 90% học viên tham gia khóa học bứt phá thành công mốc điểm Target mong muốn chỉ sau 1 lộ trình.', 
        experience: '15 năm', 
        specialty: 'Luyện thi TOEIC Cấp tốc 4 Kỹ năng (Target 850+)', 
        certificates: 'TOEIC Tuyệt đối 990/990, Chứng chỉ Nghiệp vụ Sư phạm Quốc tế TEFL' 
    },
    { 
        id: 3, 
        name: 'Cô Sarah', 
        title: 'Cựu Giám khảo IELTS chính thức - IELTS Examiner & Senior Trainer', 
        courses: 8, 
        avatar: 'https://tse2.mm.bing.net/th/id/OIP.WdrlE3yqwDD5cIDcGypffwHaHa?pid=Api&h=220&P=0', 
        bio: 'Từng đảm nhiệm vị trí Giám khảo chấm thi IELTS trực thuộc Hội đồng Khảo thí Quốc tế. Cô Sarah sở hữu kho tàng chiến thuật chấm điểm độc quyền giúp học viên tối ưu hóa tiêu chí Fluency (Trôi chảy) và Coherence (Mạch lạc) để bứt phá Band 7.5+.', 
        experience: '10 năm', 
        specialty: 'Chiến thuật Chuyên sâu IELTS Writing & Speaking Advanced', 
        certificates: 'IELTS Overall 8.5 (Mượt mà 9.0 Speaking), Chứng chỉ Giảng dạy học thuật DELTA' 
    },
    { 
        id: 4, 
        name: 'Thầy Minh', 
        title: 'Trưởng ban Học thuật Hệ thống - Chuyên gia Phục hồi Tiếng Anh Mất Gốc', 
        courses: 10, 
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', 
        bio: 'Được mệnh danh là "Người truyền lửa", Thầy Minh nổi tiếng với phương pháp tư duy toán học áp dụng vào Ngữ pháp, giúp đơn giản hóa mọi cấu trúc phức tạp. Thầy đã trực tiếp vực dậy nền tảng cho hàng ngàn học viên mất gốc lâu năm.', 
        experience: '9 năm', 
        specialty: 'Tư duy Hệ thống Ngữ pháp Ứng dụng & Phát âm chuẩn IPA', 
        certificates: 'Cử nhân Chất lượng cao Sư phạm Tiếng Anh, Chứng chỉ Giảng dạy Quốc tế TESOL' 
    }
];