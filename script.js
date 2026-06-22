const copyBtn = document.getElementById('copyBtn');
const inviteCode = document.getElementById('inviteCode');
const copyMsg = document.getElementById('copyMsg');

copyBtn.addEventListener('click', async () => {
  const code = inviteCode.textContent.trim();
  try {
    await navigator.clipboard.writeText(code);
    copyMsg.textContent = '추천인코드가 복사되었습니다.';
  } catch (error) {
    copyMsg.textContent = `복사가 안 되면 직접 선택해서 복사하세요: ${code}`;
  }

  window.setTimeout(() => {
    copyMsg.textContent = '';
  }, 2500);
});
