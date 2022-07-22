let ar1 = [12,6,21,5];
let ar2 = [5, 8, 10, 20];

let n1 = ar1.length;
let n2 = ar2.length;

function getMedian(ar1, ar2, n, m)
{
      
    let i = 0; 
      
    let j = 0; 
    let count;
    let m1 = -1, m2 = -1;
  
    if ((m + n) % 2 == 1)
    {
        for(count = 0; count <= (n + m) / 2; count++)
        {
            if (i != n && j != m)
            {
                m1 = (ar1[i] > ar2[j]) ? 
                    ar2[j++] : ar1[i++];
            }
            else if(i < n)
            {
                m1 = ar1[i++];
            }
              
            else
            {
                m1 = ar2[j++];
            }
        }
        return m1;
    }
  
    else
    {
        for(count = 0; count <= (n + m) / 2; count++)
        {
            m2 = m1;
            if (i != n && j != m)
            {
                m1 = (ar1[i] > ar2[j]) ? 
                    ar2[j++] : ar1[i++];
            }
            else if(i < n)
            {
                m1 = ar1[i++];
            }
              
            else
            {
                m1 = ar2[j++];
            }
        }
        return (m1 + m2) / 2;
    }
}
      
 

console.log(getMedian(ar1, ar2, n1, n2));

(function getMedian(ar1, ar2, n, m)
{
      
    let i = 0; 
      
    let j = 0; 
    let count;
    let m1 = -1, m2 = -1;
  
    if ((m + n) % 2 == 1)
    {
        for(count = 0; count <= (n + m) / 2; count++)
        {
            if (i != n && j != m)
            {
                m1 = (ar1[i] > ar2[j]) ? 
                    ar2[j++] : ar1[i++];
            }
            else if(i < n)
            {
                m1 = ar1[i++];
            }
              
            else
            {
                m1 = ar2[j++];
            }
        }
        return m1;
    }
  
    else
    {
        for(count = 0; count <= (n + m) / 2; count++)
        {
            m2 = m1;
            if (i != n && j != m)
            {
                m1 = (ar1[i] > ar2[j]) ? 
                    ar2[j++] : ar1[i++];
            }
            else if(i < n)
            {
                m1 = ar1[i++];
            }
              
            else
            {
                m1 = ar2[j++];
            }
        }
        console.log( (m1 + m2) / 2);
    }
}(ar1, ar2, n1, n2));
  
 