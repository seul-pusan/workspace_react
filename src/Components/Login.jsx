
export default function Login() {
    // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect
    useEffect(() => {
        // 현재 세션 정보를 가져와서 session state를 업데이트
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            // 세션이 있으면 user 정보를, 없으면 null을 user state에 저장
            setUser(session?.user || null);
            setIsLogin(session ? true : false);
        });
        // 인증 상태 변경을 감지하는 리스너를 설정
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            // 인증 상태가 변경되면 session state를 업데이트
            setSession(session);
            // 세션이 있으면 user 정보를, 없으면 null을 user state에 저장
            setUser(session?.user || null);
            setIsLogin(session ? true : false);
        });
        // 컴포넌트가 언마운트될 때 리스너를 정리
        return () => subscription.unsubscribe();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함
    // GitHub OAuth를 사용하여 로그인하는 비동기 함수
    const signInWithGithub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
        });
    };
    // 로그아웃하는 비동기 함수
    const signOut = async () => {
        await supabase.auth.signOut();
        setIsLogin(false);
    };

}
