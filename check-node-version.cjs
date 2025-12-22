const required = '20.19.6';
const current = process.versions.node;

if (current !== required) {
  console.error(`❌ Node ${required} 버전이 필요합니다. 현재 버전: ${current}`);
  process.exit(1);
}
