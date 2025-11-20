== can cause Logic flaws in cyber security checks.

1.Unexpected match between incompatible types
    Auto-conversion can make two values appear equal even when their underlying forms differ.
    For example, in JavaScript, the string "0" is considered equal to the number 0 when using loose equality (==), which can lead to bypassing security checks that expect a specific type.

2.Bypassing password or token checks
    If an authentication routine uses ==, certain strings can convert into numeric zero.
    For example, the string "0" is equal to the number 0 when using loose equality (==), which can allow an attacker to bypass authentication checks.

3.sql injection
    If a SQL query uses ==, an attacker can inject malicious SQL code by using certain strings that convert into numeric zero.
    For example, the string "0" is equal to the number 0 when using loose equality (==), which can allow an attacker to inject malicious SQL code.
    
4.Loose comparison in whitelist/blacklist logic
    If you check whether a parameter “is not empty” using loose comparisons, values like 0, "0", " ", or [] may coerce in ways that skip intended validation paths. Attackers can supply coercible payloads to reach restricted functionality.

5.Privilege-level misclassification
    If role IDs or permission flags are compared loosely, strings like "01" or "1abc" may convert to integers like 1, producing an unintended privilege escalation.

6.Weak equality in input sanitization
    Sanitization layers that compare against special values (e.g., null, false, "undefined") can be bypassed when other user inputs coerce to the same falsy value.
