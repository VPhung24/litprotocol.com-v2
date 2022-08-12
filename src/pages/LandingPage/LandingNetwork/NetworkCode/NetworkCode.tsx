import styles from './network-code.module.scss'

const NetworkCode = () => {
  return (
    <div>
        <div className={styles.wrapper}>
            <div className={styles.title}>Create an access control requirement</div>
            <textarea>{`
  // Decryption Condition: Owns at least 0.00001 ETH
  const accessControlConditions = [
    {
      "contractAddress": "",
      "standardContractType": "",
      "chain": "ethereum",
      "method": "eth_getBalance",
      "parameters": [
        ":userAddress",
        "latest"
      ],
      "returnValueTest": {
        "comparator": "&gt;=",
        "value": "10000000000000"
      }
    }
  ]
  `}
            </textarea>
        </div>

        <a className={styles.action} href="#">Create Requirement</a>
    </div>
  )
}

export default NetworkCode