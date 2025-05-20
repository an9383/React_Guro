// theme.ts
export interface Theme {
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        warning: string
        info: string
        light: string
        dark: string
        // 추가 색상 정의가 필요하다면 여기에 선언
    }
    fonts: {
        body: string
        heading: string
        monospace: string
        // 추가 폰트 스타일이 필요하다면 여기에 선언
    }
    breakpoints: {
        mobile: string
        tablet: string
        desktop: string
        // 추가 브레이크포인트가 필요하다면 여기에 선언
    }
    // 필요한 추가적인 스타일링 변수 선언 (예: 간격, 버튼 크기 등)
}

const theme: Theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        // 추가 색상 값 정의
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace',
        // 추가 폰트 스타일 정의
    },
    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        // 추가 브레이크포인트 정의
    },
    // 필요한 추가적인 스타일링 변수 정의
}

export default theme
