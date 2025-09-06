// 题目数据
const questions = [
    {
        number: 1,
        text: "当我与他人谈话时，我喜欢：",
        options: [
            { id: 'A', text: "一针见血" },
            { id: 'B', text: "说话" },
            { id: 'C', text: "只告之我想要别人知道的部分" },
            { id: 'D', text: "巨细靡遗" }
        ]
    },
    {
        number: 2,
        text: "有时我可能会：",
        options: [
            { id: 'A', text: "粗鲁" },
            { id: 'B', text: "较慢给别人信息" },
            { id: 'C', text: "对事情的解释太过狭隘" },
            { id: 'D', text: "很主观地描述事物" }
        ]
    },
    {
        number: 3,
        text: "大部分我的谈话内容导向为：",
        options: [
            { id: 'A', text: "保持友谊" },
            { id: 'B', text: "精确性" },
            { id: 'C', text: "保持和谐" },
            { id: 'D', text: "获得结果" }
        ]
    },
    {
        number: 4,
        text: "有时我被指责：",
        options: [
            { id: 'A', text: "不下定论" },
            { id: 'B', text: "没有倾听他人谈话" },
            { id: 'C', text: "很久才看到结果" },
            { id: 'D', text: "说得太多" }
        ]
    },
    {
        number: 5,
        text: "当我与他人在讨论时，他们：",
        options: [
            { id: 'A', text: "知道我渴望事实真相" },
            { id: 'B', text: "知道我不喜欢意外" },
            { id: 'C', text: "知道我的立场" },
            { id: 'D', text: "知道我很热心" }
        ]
    },
    {
        number: 6,
        text: "我喜欢的沟通方式是：",
        options: [
            { id: 'A', text: "正面性的" },
            { id: 'B', text: "逻辑性的" },
            { id: 'C', text: "直接的" },
            { id: 'D', text: "平和的" }
        ]
    },
    {
        number: 7,
        text: "我喜欢的谈话方式是：",
        options: [
            { id: 'A', text: "能刺激出新的想法" },
            { id: 'B', text: "乐观的" },
            { id: 'C', text: "诚恳的" },
            { id: 'D', text: "在控制的范围内" }
        ]
    },
    {
        number: 8,
        text: "我不喜欢的谈话方式是：",
        options: [
            { id: 'A', text: "压迫人的" },
            { id: 'B', text: "不合作的" },
            { id: 'C', text: "不接受我的观点的" },
            { id: 'D', text: "我无法控制场面的" }
        ]
    },
    {
        number: 9,
        text: "我感觉最好，当我：",
        options: [
            { id: 'A', text: "倾听他人说话时" },
            { id: 'B', text: "循议程逐步讨论时" },
            { id: 'C', text: "指挥他人时" },
            { id: 'D', text: "沟通平顺流畅时" }
        ]
    },
    {
        number: 10,
        text: "在与他人沟通时我最大的弱点为：",
        options: [
            { id: 'A', text: "要求细节" },
            { id: 'B', text: "反应太快" },
            { id: 'C', text: "希望对个人表示关心" },
            { id: 'D', text: "说话前不充分准备" }
        ]
    },
    {
        number: 11,
        text: "大多数与我共事的人认为我是：",
        options: [
            { id: 'A', text: "友善的" },
            { id: 'B', text: "谨慎的" },
            { id: 'C', text: "接受改变的" },
            { id: 'D', text: "真诚的" }
        ]
    },
    {
        number: 12,
        text: "我最大的希望是：",
        options: [
            { id: 'A', text: "和人在一起" },
            { id: 'B', text: "让我有时间适应环境的变化" },
            { id: 'C', text: "被激励" },
            { id: 'D', text: "给我坦诚的方向和评估" }
        ]
    },
    {
        number: 13,
        text: "沟通的基本观念是：",
        options: [
            { id: 'A', text: "能够合作" },
            { id: 'B', text: "得到别人的支持" },
            { id: 'C', text: "说服他人" },
            { id: 'D', text: "让事情稳定发展" }
        ]
    },
    {
        number: 14,
        text: "当我书面沟通时，我会：",
        options: [
            { id: 'A', text: "非常简短甚至不写" },
            { id: 'B', text: "强力推销我的想法" },
            { id: 'C', text: "依惯例书写" },
            { id: 'D', text: "长篇大论" }
        ]
    },
    {
        number: 15,
        text: "在什么样的环境下工作更能凸显我的功能：",
        options: [
            { id: 'A', text: "自由的" },
            { id: 'B', text: "与他人共事的" },
            { id: 'C', text: "组织性的" },
            { id: 'D', text: "愉快的" }
        ]
    },
    {
        number: 16,
        text: "给予我最大激励的谈话带给我的是：",
        options: [
            { id: 'A', text: "挑战" },
            { id: 'B', text: "安慰" },
            { id: 'C', text: "友情的温暖" },
            { id: 'D', text: "肯定" }
        ]
    },
    {
        number: 17,
        text: "当我四周的朋友遇到压力时，我告诉他们：",
        options: [
            { id: 'A', text: "事情总有好的一面" },
            { id: 'B', text: "该如何做" },
            { id: 'C', text: "随情况而改变" },
            { id: 'D', text: "切勿惊慌，平常心应对" }
        ]
    },
    {
        number: 18,
        text: "与他人交谈中我的最大长处是：",
        options: [
            { id: 'A', text: "小心谨慎" },
            { id: 'B', text: "外向" },
            { id: 'C', text: "有决断力" },
            { id: 'D', text: "愿意倾听他人谈话" }
        ]
    }
];

// DOM元素
const questionNumberEl = document.getElementById('questionNumber');
const questionTextEl = document.getElementById('questionText');
const optionsContainerEl = document.getElementById('optionsContainer');
const progressFillEl = document.getElementById('progressFill');
const progressTextEl = document.getElementById('progressText');
const prevButtonEl = document.getElementById('prevButton');
const nextButtonEl = document.getElementById('nextButton');
const submitButtonEl = document.getElementById('submitButton');
const questionCardEl = document.getElementById('questionCard');
const resultContainerEl = document.getElementById('resultContainer');
const restartButtonEl = document.getElementById('restartButton');
const startContainerEl = document.getElementById('startContainer');
const startButtonEl = document.getElementById('startButton');
const resultTableEl = document.getElementById('resultTable');
const containerEl = document.querySelector('.container');
const statIEl = document.getElementById('statI');
const statIIEl = document.getElementById('statII');
const statIIIEl = document.getElementById('statIII');
const statIVEl = document.getElementById('statIV');
const resultChartEl = document.getElementById('resultChart');
const nameContainerEl = document.getElementById('nameContainer');
const userNameInputEl = document.getElementById('userName');
const confirmNameButtonEl = document.getElementById('confirmNameButton');

// 存储当前用户信息
let currentUser = {
    name: '',
    submitTime: '',
    answers: [],
    statistics: {
        i: 0,
        ii: 0,
        iii: 0,
        iv: 0
    }
};

// 统计规则表格数据（I、II、III、IV分别对应各题的选项统计规则）
const scoringRules = [
    // 第1题: a->I, b->II, c->III, d->IV
    { 'a': 'i', 'b': 'ii', 'c': 'iii', 'd': 'iv' },
    // 第2题: a->I, d->II, b->III, c->IV
    { 'a': 'i', 'd': 'ii', 'b': 'iii', 'c': 'iv' },
    // 第3题: d->I, a->II, c->III, b->IV
    { 'd': 'i', 'a': 'ii', 'c': 'iii', 'b': 'iv' },
    // 第4题: b->I, d->II, c->III, a->IV
    { 'b': 'i', 'd': 'ii', 'c': 'iii', 'a': 'iv' },
    // 第5题: c->I, d->II, b->III, a->IV
    { 'c': 'i', 'd': 'ii', 'b': 'iii', 'a': 'iv' },
    // 第6题: c->I, a->II, d->III, b->IV
    { 'c': 'i', 'a': 'ii', 'd': 'iii', 'b': 'iv' },
    // 第7题: a->I, b->II, c->III, d->IV
    { 'a': 'i', 'b': 'ii', 'c': 'iii', 'd': 'iv' },
    // 第8题: d->I, c->II, b->III, a->IV
    { 'd': 'i', 'c': 'ii', 'b': 'iii', 'a': 'iv' },
    // 第9题: c->I, d->II, a->III, b->IV
    { 'c': 'i', 'd': 'ii', 'a': 'iii', 'b': 'iv' },
    // 第10题: b->I, d->II, c->III, a->IV
    { 'b': 'i', 'd': 'ii', 'c': 'iii', 'a': 'iv' },
    // 第11题: c->I, a->II, d->III, b->IV
    { 'c': 'i', 'a': 'ii', 'd': 'iii', 'b': 'iv' },
    // 第12题: d->I, a->II, b->III, c->IV
    { 'd': 'i', 'a': 'ii', 'b': 'iii', 'c': 'iv' },
    // 第13题: b->I, c->II, a->III, d->IV
    { 'b': 'i', 'c': 'ii', 'a': 'iii', 'd': 'iv' },
    // 第14题: a->I, b->II, c->III, d->IV
    { 'a': 'i', 'b': 'ii', 'c': 'iii', 'd': 'iv' },
    // 第15题: a->I, b->II, d->III, c->IV
    { 'a': 'i', 'b': 'ii', 'd': 'iii', 'c': 'iv' },
    // 第16题: a->I, d->II, c->III, b->IV
    { 'a': 'i', 'd': 'ii', 'c': 'iii', 'b': 'iv' },
    // 第17题: c->I, b->II, d->III, a->IV
    { 'c': 'i', 'b': 'ii', 'd': 'iii', 'a': 'iv' },
    // 第18题: c->I, b->II, d->III, a->IV
    { 'c': 'i', 'b': 'ii', 'd': 'iii', 'a': 'iv' }
];

// 测试状态
let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);

// 初始化测试
function initTest() {
    setupEventListeners();
    // 不立即加载题目，等待点击开始测试按钮
}

// 开始测试
function startTest() {
    // 隐藏开始页面
    startContainerEl.style.opacity = '0';
    startContainerEl.style.transform = 'translateY(-100vh)';
    
    // 显示用户名字填写页面
    setTimeout(() => {
        nameContainerEl.style.display = 'flex';
        // 添加淡入动画
        nameContainerEl.style.opacity = '0';
        nameContainerEl.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            nameContainerEl.style.opacity = '1';
            nameContainerEl.style.transform = 'translateY(0)';
            // 聚焦到输入框
            userNameInputEl.focus();
        }, 100);
    }, 500);
}

// 确认用户名字
function confirmName() {
    const userName = userNameInputEl.value.trim();
    
    if (!userName) {
        alert('请输入您的姓名');
        userNameInputEl.focus();
        return;
    }
    
    // 存储用户名字
    currentUser.name = userName;
    
    // 隐藏名字填写页面
    nameContainerEl.style.opacity = '0';
    nameContainerEl.style.transform = 'translateY(-100vh)';
    
    // 显示主容器
    setTimeout(() => {
        nameContainerEl.style.display = 'none';
        containerEl.style.display = 'block';
        // 添加淡入动画
        containerEl.style.opacity = '0';
        containerEl.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            containerEl.style.opacity = '1';
            containerEl.style.transform = 'translateY(0)';
            // 加载第一题
            loadQuestion(currentQuestionIndex);
            updateProgress();
        }, 100);
    }, 500);
}

// 加载题目
function loadQuestion(index) {
    const question = questions[index];
    
    // 添加淡入动画
    questionCardEl.style.opacity = '0';
    questionCardEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        questionNumberEl.textContent = `第 ${question.number} 题`;
        questionTextEl.textContent = question.text;
        
        // 清空选项容器
        optionsContainerEl.innerHTML = '';
        
        // 创建选项
        question.options.forEach(option => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.option = option.id;
            
            // 如果当前选项是已选的，则添加选中样式
            if (answers[index] === option.id) {
                optionEl.classList.add('selected');
            }
            
            optionEl.innerHTML = `
                <input type="radio" id="q${question.number}opt${option.id}" name="q${question.number}" value="${option.id}" ${answers[index] === option.id ? 'checked' : ''}>
                <label for="q${question.number}opt${option.id}" class="option-label">(${option.id}) ${option.text}</label>
            `;
            
            optionsContainerEl.appendChild(optionEl);
            
            // 添加选项点击事件
            optionEl.addEventListener('click', () => {
                selectOption(option.id);
            });
        });
        
        // 恢复显示
        questionCardEl.style.opacity = '1';
        questionCardEl.style.transform = 'translateY(0)';
    }, 200);
}

// 选择选项
function selectOption(optionId) {
    answers[currentQuestionIndex] = optionId;
    
    // 更新选项样式
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.dataset.option === optionId) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // 如果是最后一题且已经有答案，显示提交按钮
    if (currentQuestionIndex === questions.length - 1 && answers[currentQuestionIndex] !== null) {
        showSubmitButton();
    } else {
        hideSubmitButton();
    }
}

// 更新进度条
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFillEl.style.width = `${progress}%`;
    progressTextEl.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

// 上一题
function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        updateProgress();
        updateNavigationButtons();
        hideSubmitButton();
    }
}

// 下一题
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        updateProgress();
        updateNavigationButtons();
        
        // 如果是最后一题且已经有答案，显示提交按钮
        if (currentQuestionIndex === questions.length - 1 && answers[currentQuestionIndex] !== null) {
            showSubmitButton();
        }
    }
}

// 更新导航按钮状态
function updateNavigationButtons() {
    prevButtonEl.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextButtonEl.style.display = 'none';
        if (answers[currentQuestionIndex] !== null) {
            showSubmitButton();
        }
    } else {
        nextButtonEl.style.display = 'block';
        hideSubmitButton();
    }
}

// 显示提交按钮
function showSubmitButton() {
    submitButtonEl.style.display = 'block';
    nextButtonEl.style.display = 'none';
}

// 隐藏提交按钮
function hideSubmitButton() {
    submitButtonEl.style.display = 'none';
}

// 提交测试
function submitTest() {
    // 验证是否所有题目都已回答
    if (answers.every(answer => answer !== null)) {
        // 保存用户测试结果
        saveUserResults();
        showResults();
    } else {
        alert('请完成所有题目后再提交');
    }
}

// 保存用户测试结果
function saveUserResults() {
    // 记录提交时间
    const now = new Date();
    currentUser.submitTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // 保存答案
    currentUser.answers = [...answers];
    
    // 保存统计结果
    const statistics = calculateStatistics();
    currentUser.statistics = {
        i: statistics.i,
        ii: statistics.ii,
        iii: statistics.iii,
        iv: statistics.iv
    };
    
    // 获取已保存的所有用户数据
    let allUsers = getSavedUsers();
    
    // 添加当前用户数据
    allUsers.push(currentUser);
    
    // 保存到本地存储
    localStorage.setItem('communicationTestUsers', JSON.stringify(allUsers));
    
    // 为了方便测试，在控制台输出当前用户数据
    console.log('用户测试结果已保存:', currentUser);
}

// 从本地存储获取所有用户数据
function getSavedUsers() {
    try {
        const saved = localStorage.getItem('communicationTestUsers');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error('读取本地存储数据失败:', e);
        return [];
    }
}

// 显示结果（以表格形式）
function showResults() {
    // 隐藏题目卡片和导航按钮
    document.querySelector('.test-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    
    // 显示结果容器
    resultContainerEl.style.display = 'block';
    
    // 添加淡入动画
    resultContainerEl.style.opacity = '0';
    resultContainerEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultContainerEl.style.opacity = '1';
        resultContainerEl.style.transform = 'translateY(0)';
        
        // 生成结果表格
        generateResultTable();
    }, 200);
}

// 统计I、II、III、IV的值
function calculateStatistics() {
    // 初始化统计变量（I、II、III、IV）
    const stats = {
        i: 0,
        ii: 0,
        iii: 0,
        iv: 0
    };
    
    // 遍历所有题目的答案，根据规则统计
    answers.forEach((answer, questionIndex) => {
        if (answer) {
            // 转换答案为小写（大写和小写意义相同）
            const answerLower = answer.toLowerCase();
            
            // 获取当前题目的评分规则
            const rule = scoringRules[questionIndex];
            
            // 根据规则增加相应的统计值
            if (rule && rule[answerLower]) {
                stats[rule[answerLower]]++;
            }
        }
    });
    
    return stats;
}

// 绘制柱状图
function drawChart(stats) {
    // 销毁已存在的图表实例
    if (window.resultChart) {
        window.resultChart.destroy();
    }
    
    // 获取Canvas上下文
    const ctx = resultChartEl.getContext('2d');
    
    // 创建柱状图
    window.resultChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'],
            datasets: [{
                label: '得分',
                data: [stats.i, stats.ii, stats.iii, stats.iv],
                backgroundColor: [
                    'rgba(72, 187, 120, 0.8)',
                    'rgba(66, 153, 225, 0.8)',
                    'rgba(156, 136, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(72, 187, 120, 1)',
                    'rgba(66, 153, 225, 1)',
                    'rgba(156, 136, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `得分: ${context.parsed.y}`;
                        }
                    }
                }
            }
        }
    });
}

// 生成结果表格
function generateResultTable() {
    // 清空表格
    resultTableEl.innerHTML = '';
    
    // 创建表头
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>题号</th>
            <th>您的选择</th>
        </tr>
    `;
    resultTableEl.appendChild(thead);
    
    // 创建表体
    const tbody = document.createElement('tbody');
    
    // 遍历所有题目，添加到表格中
    questions.forEach((question, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>第 ${question.number} 题</td>
            <td class="answer-cell">${answers[index] || '-'}</td>
        `;
        tbody.appendChild(row);
    });
    
    resultTableEl.appendChild(tbody);
    
    // 添加表格统计信息
    const tfoot = document.createElement('tfoot');
    
    // 统计各选项的选择次数
    const optionCount = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0
    };
    
    answers.forEach(answer => {
        if (answer) {
            optionCount[answer]++;
        }
    });
    
    // 创建统计行
    const statsRow = document.createElement('tr');
    statsRow.innerHTML = `
        <td colspan="2" style="text-align: left; padding: 15px;">
            <strong>选择分布:</strong> A(${optionCount.A}) B(${optionCount.B}) C(${optionCount.C}) D(${optionCount.D})
        </td>
    `;
    statsRow.style.backgroundColor = '#f7fff7';
    
    tfoot.appendChild(statsRow);
    resultTableEl.appendChild(tfoot);
    
    // 计算并显示甲、乙、丙、丁的统计结果
    const statistics = calculateStatistics();
    
    // 更新统计结果显示
    statIEl.textContent = statistics.i;
    statIIEl.textContent = statistics.ii;
    statIIIEl.textContent = statistics.iii;
    statIVEl.textContent = statistics.iv;
    
    // 绘制柱状图
    drawChart(statistics);
}

// 重新开始测试
function restartTest() {
    // 重置状态
    currentQuestionIndex = 0;
    answers.fill(null);
    
    // 隐藏结果容器
    resultContainerEl.style.display = 'none';
    
    // 隐藏主容器
    containerEl.style.opacity = '0';
    containerEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        containerEl.style.display = 'none';
        
        // 显示开始页面
        startContainerEl.style.opacity = '1';
        startContainerEl.style.transform = 'translateY(0)';
        
        // 显示题目卡片和导航按钮，隐藏结果容器
        document.querySelector('.test-container').style.display = 'block';
        document.querySelector('.navigation-buttons').style.display = 'flex';
        document.querySelector('.progress-container').style.display = 'block';
    }, 500);
}

// 设置事件监听器
function setupEventListeners() {
    prevButtonEl.addEventListener('click', goToPrevQuestion);
    nextButtonEl.addEventListener('click', goToNextQuestion);
    submitButtonEl.addEventListener('click', submitTest);
    restartButtonEl.addEventListener('click', restartTest);
    startButtonEl.addEventListener('click', startTest);
    confirmNameButtonEl.addEventListener('click', confirmName);
    
    // 监听回车键提交名字
    userNameInputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            confirmName();
        }
    });
    
    // 监听窗口大小变化，调整样式
    window.addEventListener('resize', () => {
        // 这里可以添加响应式调整逻辑
    });
}

// 启动测试
window.addEventListener('DOMContentLoaded', initTest);