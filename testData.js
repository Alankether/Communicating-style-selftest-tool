// 测试数据生成脚本
// 用于在本地存储中添加一些示例测试数据，以便在管理员页面上展示效果

// 创建示例用户数据
function createTestData() {
    const testUsers = [
        {
            name: "张三",
            submitTime: "2023-12-15 14:30:25",
            answers: ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B"],
            statistics: {
                i: 4,
                ii: 5,
                iii: 4,
                iv: 5
            }
        },
        {
            name: "李四",
            submitTime: "2023-12-15 13:45:12",
            answers: ["D", "C", "B", "A", "D", "C", "B", "A", "D", "C", "B", "A", "D", "C", "B", "A", "D", "C"],
            statistics: {
                i: 5,
                ii: 4,
                iii: 5,
                iv: 4
            }
        },
        {
            name: "王五",
            submitTime: "2023-12-15 10:20:33",
            answers: ["B", "A", "D", "C", "B", "A", "D", "C", "B", "A", "D", "C", "B", "A", "D", "C", "B", "A"],
            statistics: {
                i: 3,
                ii: 6,
                iii: 3,
                iv: 6
            }
        },
        {
            name: "赵六",
            submitTime: "2023-12-14 16:10:55",
            answers: ["C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"],
            statistics: {
                i: 6,
                ii: 3,
                iii: 6,
                iv: 3
            }
        },
        {
            name: "孙七",
            submitTime: "2023-12-14 09:35:42",
            answers: ["A", "C", "B", "D", "A", "C", "B", "D", "A", "C", "B", "D", "A", "C", "B", "D", "A", "C"],
            statistics: {
                i: 5,
                ii: 4,
                iii: 5,
                iv: 4
            }
        }
    ];
    
    // 将测试数据保存到本地存储
    localStorage.setItem('communicationTestUsers', JSON.stringify(testUsers));
    
    console.log('测试数据已添加到本地存储！');
    console.log('包含了5个示例用户的测试结果，您可以在teacher.html页面查看这些数据。');
}

// 检查是否需要添加测试数据
function checkAndAddTestData() {
    try {
        const existingData = localStorage.getItem('communicationTestUsers');
        if (!existingData || JSON.parse(existingData).length === 0) {
            // 如果没有现有数据，则添加测试数据
            createTestData();
            return true;
        }
        return false;
    } catch (e) {
        console.error('检查本地存储数据失败:', e);
        // 如果出错，也添加测试数据
        createTestData();
        return true;
    }
}

// 在页面加载时运行（如果直接打开此脚本文件）
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        const added = checkAndAddTestData();
        if (added) {
            alert('测试数据已添加！请刷新teacher.html页面查看示例数据。');
        } else {
            alert('本地存储中已有测试数据，未添加新的测试数据。');
        }
    });
}